import {Database} from "better-sqlite3";

export default function createPostsIfNotExists(db: Database) {

    db.exec(`
        CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            content TEXT NOT NULL,
            userId INTEGER REFERENCES users(id),
            createdAt DATE
        )
    `)
}
