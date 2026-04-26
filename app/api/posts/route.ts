import db from "@/db/db-init/init"
import { checkUser } from "@/lib/checkUser";


export async function GET() {
    const user = await checkUser()
    if(!user) return Response.json({res: "Unauthorized", ok: false}); 
    
    const posts = db.prepare(`
            SELECT * FROM posts
    `).all()
    return Response.json({res: posts})
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
    if(! data.postContent) return Response.json({res: "Your post has not been uploaded.", ok: false})
    insert.run(data.postContent, user.userId, dateParsed)

    return Response.json({res: "Your post has been uploaded!", ok: true})
}

