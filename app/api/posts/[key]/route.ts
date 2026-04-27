import db from "@/db/db-init/init"
import { checkUser } from "@/lib/checkUser"



export async function DELETE(req: Request, {params}: {params: Promise<{ key: string; }>}) {
    const user = await checkUser()
    if(! user) return Response.json({res: "hel"});
    const parameters = await params
    if(! parameters.key) return Response.json({res: "bad", ok: false});
    console.log("Params: \n", parameters)
    

    const deletePost = db.prepare(`
            DELETE FROM posts
            WHERE id = ?
        `)
    deletePost.run(Number(parameters.key))
    console.log("tewesy")
    return Response.json({"h": "ed"})
} 