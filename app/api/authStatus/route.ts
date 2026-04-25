import { checkUser } from "@/lib/checkUser";






export async function GET() {
    const user = await checkUser()
    if(! user) return Response.json({res: "Unauthorized", ok: false})
    return Response.json({ok: true})
}