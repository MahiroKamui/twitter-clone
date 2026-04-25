"use client"

import { useEffect, useState } from "react";
import Posts from "./components/GetPosts";
import CreatePost from "./components/CreatePost";






export default function Home() {
  const [isAuthed, setIsAuthed] = useState<boolean>(false)
  const [resMessage, setResMessage] = useState<string>("")

  useEffect(() => {
    fetch('/api/authStatus/')
    .then(res => res.json())
    .then(data => {
      setIsAuthed(data.ok)
      setResMessage(data.res)
    })
  }, [])


  


  if(!isAuthed) {
    return (
      <div>
        {resMessage}
      </div>
    )
  }

  return (
    <div className="flex flex-row min-h-[96.5vh] bg-neutral-400">
      <div className="w-full flex ">
        <div className="bg-blue-400 grow min-w-0">
          <CreatePost />
        </div>
        <div className="bg-blue-500 grow-3">
          <Posts />
        </div>
        <div className="bg-blue-400 grow-2">
          cont3
        </div>
      </div>
    </div>
  );
}
