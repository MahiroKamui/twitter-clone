import db from '@/db/db-init/initUsers'


export async function POST(req: Request) {
    const data = await req.json()
    const userData = {
        name: data.name,
        username: data.username,
        password: data.password
    }
    try {
        const insert = db.prepare('INSERT INTO users (name, username, password) VALUES (?, ?, ?)')
        insert.run(userData.name, userData.username, userData.password)
    } 
    catch (err) {
        console.log()
        return Response.json({res: err, ok: false})
        //return Response.json({res: "Invalid username.", ok: false})
    }

    return Response.json({res: 'Your account has been created!'})
}

