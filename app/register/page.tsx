"use client"
import { useState } from "react"



export default function page() {
    const [showError, setShowError] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    function signUp(e: any) {
        e.preventDefault()
        try {
            fetch('api/users', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name, username: username, password: password })
            })
            .then(res => res.json())
            .then(data => {
                !data.ok ? console.log(data.res) : setShowError(false)
            })
            .catch(err => console.log(err))
        }
        catch (err) {
            console.log(err)
        }
        
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-red-100 bg-size-[20%] font-sans bg-[url(/images/authentication/register/flower.png)]">
            <div className="flex flex-col items-center justify-center bg-pink-200 h-70 w-170 shadow-xl border border-red-400 gap-8">
                <span className="text-3xl max-sm:text-4xl">Create your account</span>
                <form onSubmit={signUp} className="flex flex-col items-center max-sm:w-120 gap-0.5">
                    <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} required className="bg-pink-300 w-65 h-10 pl-2 border-2 border-pink-700" />
                    <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} required className="bg-pink-300 w-65 h-10 pl-2 border-2 border-pink-700" />
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required className="bg-pink-300 w-65 h-10 pl-2 border-2 border-pink-700" />
                    <input type="submit" className="mt-2 bg-pink-300 w-30 border-2 hover:bg-pink-400 active:bg-pink-500" />
                </form>
            </div>
        </div>
    )
}
