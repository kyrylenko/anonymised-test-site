"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import CustomLink from "./CustomLink"
import type React from "react"

interface AppLinkProps {
  href: string
  children: React.ReactNode
}

export default function AppLink({ href, children }: AppLinkProps) {
  const [isSPA, setIsSPA] = useState<boolean | null>(null)

  useEffect(() => {
    const savedIsSPA = localStorage.getItem("isSPA")
    setIsSPA(savedIsSPA !== null ? JSON.parse(savedIsSPA) : true)
  }, [])

  if (isSPA === null) {
    // Return a placeholder or null while loading
    return <span>{children}</span>
  }

  if (isSPA) {
    return <Link href={href}>{children}</Link>
  } else {
    return <CustomLink href={href}>{children}</CustomLink>
  }
}