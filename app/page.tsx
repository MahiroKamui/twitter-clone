"use client"

import { useState } from "react";






export default function Home() {
  const [isAuthed, setIsAuthed] = useState<boolean>(false)
  fetch('api/authStatus/')
  .then(res => res.json())
  .then(data => setIsAuthed(data.ok))

  if(!isAuthed) {
    return (
      <div>
        hel
      </div>
    )
  }

  return (
    <div className="">
      logged in
    </div>
  );
}
