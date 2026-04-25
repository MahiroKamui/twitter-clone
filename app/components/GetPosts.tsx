import { useEffect } from "react"

let testArray = [
    {
        postTitle: "test"
    }
]

export default function GetPosts() {
    let data 
    async function getData() {
        fetch('api/posts')
    }
    useEffect(() => {

    })
    return (
        <div>
            {testArray.map(e => (
                <div>2</div>
            ))}
        </div>
    )
}