import type React from "react"
import AppLink from "../components/AppLink"
import DynamicTagTypeLayout from "../components/DynamicTagTypeLayout"

export default function TagTypeLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { tagType: string }
}) {
  return <>
    <AppLink href="/">Home</AppLink>
    <DynamicTagTypeLayout tagType={params.tagType}>{children}</DynamicTagTypeLayout>
  </>
}

export function generateStaticParams() {
  return [{ tagType: "gtm" }, { tagType: "native" }]
}

