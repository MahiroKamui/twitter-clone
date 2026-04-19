import db from "@/db/db-init/init";
import { createId } from "@paralleldrive/cuid2";




export default async function POST(req: Request) {
    return Response.json({res: "hello"})
}