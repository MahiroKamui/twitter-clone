"use client"

import { useState } from "react";




export default function page() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string>("")


  function login(e: any) {
    e.preventDefault()
    try {
      fetch('api/auth', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
    }
    catch (err) {

    }
  }


  return (
  <div className="flex min-h-screen items-center justify-center bg-red-100 bg-size-[20%] font-sans bg-[url(/images/authentication/register/flower.png)]">
            <div className="flex flex-col items-center justify-center bg-pink-200 h-70 w-170 shadow-xl border border-red-400">
                <span className="text-3xl max-sm:text-4xl mb-8 ">Login to your account</span>
                <div className={"flex justify-center w-40 h-30 mb-2 bg-neutral-200 text-red-700 " + (error == "" ? "hidden": "")}> {error} </div>
                <form onSubmit={login} className="flex flex-col items-center max-sm:w-120 gap-0.5">
                    <input type="text" placeholder="username" onChange={(e) => {setUsername(e.target.value); setError("")}} required className={"bg-pink-300 w-65 h-10 pl-2 border-2 border-pink-700 " + (!(error == "")? "bg-red-400": "")} />
                    <input type="password" minLength={8} placeholder="password" onChange={(e) => setPassword(e.target.value)} required className={"bg-pink-300 w-65 h-10 pl-2 border-2 border-pink-700 " + (!(error == "")? "bg-red-400": "")} />
                    <input type="submit" value={"Login"} className="mt-2 bg-pink-300 w-30 border-2 hover:bg-pink-400 active:bg-pink-500" />
                </form>
            </div>
        </div>
  )
}
