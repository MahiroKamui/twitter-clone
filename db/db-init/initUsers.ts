import {Database} from "better-sqlite3";

export default function createUsersIfNotExists(db: Database) {

    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            username varchar(55) UNIQUE NOT NULL,
            password varchar(30) NOT NULL
        )
    `)
}
