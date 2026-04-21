import db from "@/db/db-init/init";
import { createId } from "@paralleldrive/cuid2";


type User = {
    id?: number,
    name?: string,
    username?: string
    password?: string
}

function checkIfUserExists(data: any) {
    const retrieveUser = db.prepare<User[], User>(`
        SELECT * FROM users
        WHERE username = ?
        `)
        const user = retrieveUser.get(data.username)
        if(user) console.log(user)
        
        return false
}

export async function POST(req: Request) {
    const data = await req.json()

    if(! (checkIfUserExists(data))) return Response.json({res: "Invalid password or username", ok: false})

    
    return Response.json({res: "hello"})
}