import db from "@/db/db-init/init";
import { createId } from "@paralleldrive/cuid2";
import { cookies } from "next/headers";


type User = {
    id?: number,
    name?: string,
    username?: string
    password?: string
}
let user: User | undefined = {}
let sessionId: string = ""

function checkIfUserExists(data: any) {
    const retrieveUser = db.prepare<User[], User>(`
        SELECT * FROM users
        WHERE username = ?
    `)
    user = retrieveUser.get(data.username)
    if(!(user)) return false
    return true
}

function isPassCorrect(data: User | undefined) {
    if(! (user?.password == data?.password)) return false
    return true
}

function loginUser(data: User | undefined) {
    sessionId = createId()
    const futureDate: number = Date.now() + 3 * 24 * 60 * 60 * 1000

    try {
        const insert = db.prepare('INSERT INTO sessions (sessionId, userId, expiresAt) VALUES (?, ?, ?)')
        insert.run(sessionId, user?.id, futureDate)
    }
    catch (err) {
        console.log("failed at line 32:\n", err)
    }
}

export async function POST(req: Request) {
    const data = await req.json()
    if(! (checkIfUserExists(data))) return Response.json({res: "Invalid password or username", ok: false});
    
    if(! (isPassCorrect(data))) return Response.json({res: "Invalid password or username", ok: false})

    loginUser(data)

    ;(await cookies()).set('Session', sessionId, {httpOnly: true})




    return Response.json({res: "no", ok: false})
}