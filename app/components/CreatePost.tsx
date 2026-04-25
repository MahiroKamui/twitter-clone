"use client"

import { useState } from "react"

export default function CreatePost() {
    const [postContent, setPostContent] = useState<string>("")

    async function createPost() {
        try {
            await fetch('/api/posts', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({postContent: postContent})
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
        catch (error) {
            console.log(error)
        }
    }


    function submitHandler(e: any) {
        e.preventDefault()
        console.log("hello")
        createPost()
    }
    return (
        <>
            <div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col items-center ">
                        Create a post?
                    </div>
                    <form onSubmit={submitHandler} className="flex flex-col ml-">

                        <textarea onChange={e => {setPostContent(e.target.value); console.log(e.target.value)}} className="w-70 h-150 bg-blue-300" />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </>
    )
}