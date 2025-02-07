import type React from "react"

export default function CMPLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { cmpType: string }
}) {
  return (
    <div>
      <h2>CMP Script: {params.cmpType}</h2>
      {children}
    </div>
  )
}

export function generateStaticParams() {
  return [{ cmpType: "inmobi" }, { cmpType: "uniconsent" }]
}