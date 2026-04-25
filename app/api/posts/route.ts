import { cookies } from "next/headers"
import db from "@/db/db-init/init"
import { checkUser } from "@/lib/checkUser";


export async function GET() {
    const user = await checkUser()
    if(!user) return Response.json({res: "Unauthorized", ok: false})

    
}

export async function POST(req: Request) {
    const data = await req.json()
    const user = await checkUser()
    if(!user || !user.ok) return Response.json({res: "Unauthorized", ok: false});
    const date = [new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes()]
    const dateParsed = `${date[0]}-${date[1]}-${date[2]} ${date[3]}:${date[4]}`
    const insert = db.prepare(`
        INSERT INTO posts(content, userId, createdAt)
        VALUES(?,?,?)
    `)
    insert.run(data.postContent, user.userId, dateParsed)

    console.log(checkUser())
    return Response.json({res: "helo", ok: true})
}