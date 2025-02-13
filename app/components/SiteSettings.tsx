"use client"

import { useState, useEffect } from "react"

export default function SiteSettings() {
  const [isSPA, setIsSPA] = useState<boolean | null>(null)

  useEffect(() => {
    // This code only runs on the client side
    const savedIsSPA = localStorage.getItem("isSPA")
    setIsSPA(savedIsSPA !== null ? JSON.parse(savedIsSPA) : true)
  }, [])

  useEffect(() => {
    // This effect runs when isSPA changes and is not null
    if (isSPA !== null) {
      localStorage.setItem("isSPA", JSON.stringify(isSPA))
    }
  }, [isSPA])

  const handleToggleChange = () => {
    setIsSPA((prevState) => !prevState)
  }

  // Don't render anything until isSPA is set
  if (isSPA === null) {
    return null
  }

  return (
    <div>
      <h2>Site settings</h2>
      <label>
        <input type="checkbox" checked={isSPA} onChange={handleToggleChange} />
        {isSPA ? "SPA" : "MPA"}
      </label>
    </div>
  )
}