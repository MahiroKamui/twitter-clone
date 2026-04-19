import Database from "better-sqlite3";
import createUsersIfNotExists from "./initUsers";
import createSessionsIfNotExists from "./initSessions";

const db = new Database('./db/database.db')


createUsersIfNotExists(db)
createSessionsIfNotExists(db)

export default db