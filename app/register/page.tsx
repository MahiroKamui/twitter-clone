"use client"



export default function page() {
    function signUp(e: any) {
        e.preventDefault()
        fetch('/api/auth/register/', {
            method: 'POST'
        })
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-red-100 bg-size-[20%] font-sans bg-[url(/images/authentication/register/flower.png)]">
            <div className="flex flex-col items-center justify-center bg-pink-200 h-70 w-170 shadow-xl border border-red-400 gap-8">
                <span className="text-3xl max-sm:text-4xl">Create your account</span>
                <form className="flex flex-col max-sm:w-120 gap-0.5">
                    <input type="text" placeholder="name" className="bg-pink-300 pl-2 border-2 border-pink-700"/>
                    <input type="text" placeholder="username" className="bg-pink-300 pl-2 border-2 border-pink-700"/>
                    <input type="password" placeholder="password" className="bg-pink-300 pl-2 border-2 border-pink-700"/>
                    <input type="submit" onClick={signUp}/>
                </form>
            </div>
        </div>
    )
}
