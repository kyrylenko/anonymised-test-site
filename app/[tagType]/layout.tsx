import type React from "react"
import Link from "next/link"
import CustomLink from "../components/CustomLink"
import DynamicTagTypeLayout from "../components/DynamicTagTypeLayout"

export default function TagTypeLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { tagType: string }
}) {
  return <>
    <CustomLink href="/">Home</CustomLink>
    <DynamicTagTypeLayout tagType={params.tagType}>{children}</DynamicTagTypeLayout>
  </>
}

export function generateStaticParams() {
  return [{ tagType: "gtm" }, { tagType: "native" }]
}

