import Database from 'better-sqlite3'
const db = new Database('./db/database.db')






export async function POST() {
    db.exec('')
    console.log("hehe")
    return Response.json('Your account has been created!')
}
