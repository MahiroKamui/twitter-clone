"use client"

import { FormEvent, useState } from "react"



export default function page() {
    const [name, setName] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    
    
    function signUp(e: any) {
        e.preventDefault()
        fetch('api/users/route.ts', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify("")
        })
    }
    

    return (
        <div className="flex min-h-screen items-center justify-center bg-red-100 bg-size-[20%] font-sans bg-[url(/images/authentication/register/flower.png)]">
            <div className="flex flex-col items-center justify-center bg-pink-200 h-70 w-170 shadow-xl border border-red-400 gap-8">
                <span className="text-3xl max-sm:text-4xl">Create your account</span>
                <form  onSubmit={signUp} className="flex flex-col max-sm:w-120 gap-0.5">
                    <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} className="bg-pink-300 w-65 h-10 pl-2 border-2 border-pink-700"/>
                    <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} className="bg-pink-300 w-65 h-10 pl-2 border-2 border-pink-700"/>
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="bg-pink-300 w-65 h-10 pl-2 border-2 border-pink-700"/>
                    <input type="submit"/>
                </form>
            </div> 
        </div>
    )
}
