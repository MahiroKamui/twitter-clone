export type Session = {
    id: number,
    sessionId: string,
    userId: number,
    expiresAt: number
}

export type Users = {
    id: number,
    name: string,
    username: string,
    password: string
}