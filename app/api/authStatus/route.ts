import db from "@/db/db-init/init";
import { cookies } from "next/headers"





export async function GET() {
    function checkIfExpired() {
        
    }
    const session = (await cookies()).get('Session')



    
    if(!session) return Response.json({isAuth: false, res: "Please login to access the content"});
    return Response.json({ok: true})
}