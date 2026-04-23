"use client"

import { useEffect, useState } from "react";






export default function Home() {
  const [isAuthed, setIsAuthed] = useState<boolean>(false)
  const [resMessage, setResMessage] = useState<string>("")

  useEffect(() => {
    fetch('api/authStatus/')
    .then(res => res.json())
    .then(data => {
      setIsAuthed(data.ok))
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
      
    </div>
  );
}
