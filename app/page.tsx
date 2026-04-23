"use client"

import { useEffect, useState } from "react";
import Posts from "./components/Posts";






export default function Home() {
  const [isAuthed, setIsAuthed] = useState<boolean>(false)
  const [resMessage, setResMessage] = useState<string>("")

  useEffect(() => {
    fetch('api/authStatus/')
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
      <div className="w-full flex *:grow">
        <div className="bg-blue-400">
          cont1
        </div>
        <div className="bg-blue-500">
          <Posts />
        </div>
        <div className="bg-blue-400">
          cont3
        </div>
      </div>
    </div>
  );
}
