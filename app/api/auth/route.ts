import db from "@/db/db-init/init";
import { createId } from "@paralleldrive/cuid2";




export async function POST(req: Request) {
    const data = await req.json()
    

    console.log(data)
    return Response.json({res: "hello"})
}