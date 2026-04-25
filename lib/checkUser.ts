import { cookies } from "next/headers";
import db from "@/db/db-init/init";
import { Session, Users } from "./types/types";




function checkIfSessionValid(session: string | undefined) {
    const querySession = db.prepare(`
        SELECT * FROM sessions
        WHERE sessionId = ?
    `)
    const queryUser = db.prepare(`
            SELECT * FROM users
            where id = ?
        `)
    
    const sessionData: Session = querySession.get(session) as Session
    if(! sessionData) return false
    const userData = queryUser.get(sessionData.userId) as Users

    const expiryDate = sessionData.expiresAt
    const now = Date.now()
    if(now > expiryDate) return false
    
    const user = {
        userId: userData.id,
        name: userData.name,
        username: userData.username,
        password: userData.password,
        ok: true,
    }

    return user
}

async function retrieveSession() {
    const session = (await cookies()).get('Session')
    return session?.value
}



export async function checkUser() {
    const session: string | undefined = await retrieveSession()
    if(! session) return false
    let user = checkIfSessionValid(session)
    if(!user) return false
    console.log(user.ok)
    return user
}