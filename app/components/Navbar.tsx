"use client"
import { useRouter } from "next/navigation"
import { JSX, useEffect, useState } from "react"

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState<JSX.Element>()

    
    const router = useRouter()
    return (
        <div className="border-b-2 ">
            <div className="min-w-screen flex gap-1 bg-red-100">
                <div className="w-20 mr-4 bg-red-200 hover:bg-red-300 active:bg-pink-400" onClick={() => { router.push('/') }}>
                    Home
                </div>
                <div className="flex justify-center w-20 bg-red-200 hover:bg-red-300 active:bg-pink-400" onClick={() => { router.push('/login') }}>
                    Own posts
                </div>
                <div className="flex justify-center w-20 bg-red-200 hover:bg-red-300 active:bg-pink-400" onClick={() => { router.push('/register') }}>
                    Search
                </div>
                <div className="flex justify-center w-20 bg-red-200 hover:bg-red-300 active:bg-pink-400" onClick={() => { router.push('/profile') }}>
                    Profile
                </div>
            <div className="ml-auto bg-red-600 justify-end float-right ">
                <div className="flex">
                    <div>
                        {isLoggedIn}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
