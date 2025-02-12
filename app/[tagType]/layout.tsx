import type React from "react"
import Link from "next/link"
import DynamicTagTypeLayout from "../components/DynamicTagTypeLayout"

export default function TagTypeLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { tagType: string }
}) {
  return <>
    <Link href="/">Home</Link>
    <DynamicTagTypeLayout tagType={params.tagType}>{children}</DynamicTagTypeLayout>
  </>
}

export function generateStaticParams() {
  return [{ tagType: "gtm" }, { tagType: "native" }]
}

