import {Database} from "better-sqlite3";

export default function createSessionsIfNotExists(db: Database) {

    db.exec(`
        CREATE TABLE IF NOT EXISTS sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sessionId TEXT,
            userId INTEGER REFERENCES users(id),
            expiresAt DATE
        )
    `)
}
