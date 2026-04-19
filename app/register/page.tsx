"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"



export default function page() {
    const [name, setName] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [signUpSuccesful, setSignUpSuccessful] = useState<boolean>(false)
    const router = useRouter()


    useEffect(() => {
        if(signUpSuccesful) {
            setTimeout(() => {
                router.push('/login')
            }, 5000)
        }
    }, [signUpSuccesful])


    
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
                    if (data.ok == false) setError(data.res); else setSignUpSuccessful(true)
                })
                .catch(err => console.log(err))
        }
        catch (err) {
            console.log(err)
        }

    }


    if (signUpSuccesful) {

        return (
            <div className="flex min-h-screen items-center justify-center bg-red-100 bg-size-[20%] font-sans bg-[url(/images/authentication/register/flower.png)]">
                <div className="flex flex-col items-center justify-center bg-pink-200 h-70 w-170 shadow-xl border border-red-400">
                    <h1 className="mb-5 text-8xl">Success!</h1>
                    <span className="bg-amber-50">You will be redirected to the login page in a few seconds</span>
                </div>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-red-100 bg-size-[20%] font-sans bg-[url(/images/authentication/register/flower.png)]">
            <div className="flex flex-col items-center justify-center bg-pink-200 h-70 w-170 shadow-xl border border-red-400">
                <span className="text-3xl max-sm:text-4xl mb-8 ">Create your account</span>
                <div className={"flex justify-center w-40 h-30 mb-2 bg-neutral-200 text-red-700 " + (error == "" ? "hidden" : "")}> {error} </div>
                <form onSubmit={signUp} className="flex flex-col items-center max-sm:w-120 gap-0.5">
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required className="bg-pink-300 w-65 h-10 pl-2 border-2 border-pink-700" />
                    <input type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value); setError("") }} required className={"bg-pink-300 w-65 h-10 pl-2 border-2 border-pink-700 " + (!(error == "") ? "bg-red-400" : "")} />
                    <input type="password" minLength={8} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required className="bg-pink-300 w-65 h-10 pl-2 border-2 border-pink-700" />
                    <input type="submit" value={"Sign up"} className="mt-2 bg-pink-300 w-30 border-2 hover:bg-pink-400 active:bg-pink-500" />
                </form>
            </div>
        </div>
    )
}
