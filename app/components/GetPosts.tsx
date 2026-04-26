"use client"
import { Posts } from "@/lib/types/types"
import { useEffect, useState } from "react"


export default function GetPosts() {
    const [posts, setPosts] = useState<Posts[]>([])
    let reversedPosts

    async function getData() {
        try {
            await fetch('/api/posts/')
            .then(res => res.json())
            .then(data => {
                setPosts(data.res)

            })
        }
        catch (err) {
            console.log(err)
        }
    }
    async function deletePost(key: number) {
        console.log(key)
        await fetch(`/api/posts/${key}`, {method: "DELETE"})
        window.location.reload()
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <div>
            </div>

            {[...posts].reverse().map( post => (
                <div key={post.id} className="bg-red-200 mb-4">
                    <div>
                        {post.content}
                    </div>
                    <div>
                        {post.createdAt}
                    </div>
                    <div className="flex justify-center w-30 bg-red-400 cursor-pointer"
                    onClick={() => {deletePost(post.id)}}
                    >
                        Delete?
                    </div>
                </div>
            ))}
        </div>
    )
}