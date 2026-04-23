import { useEffect } from "react"

let testArray = [
    {
        postTitle: "test"
    }
]

export default async function Posts() {
    let data 
    async function getData() {
        fetch('api/posts')
    }
    useEffect(() => {
        data = await getData()

    })
    return (
        <div>
            {testArray.map(e => (
                <div>2</div>
            ))}
        </div>
    )
}