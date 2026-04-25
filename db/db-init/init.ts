import Database from "better-sqlite3";
import createUsersIfNotExists from "./initUsers";
import createSessionsIfNotExists from "./initSessions";
import createPostsIfNotExists from "./initPosts";

const db = new Database('./db/database.db')


createUsersIfNotExists(db)
createSessionsIfNotExists(db)
createPostsIfNotExists(db)
export default db