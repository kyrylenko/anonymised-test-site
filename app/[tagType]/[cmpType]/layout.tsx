import type React from "react"
import Script from "next/script"

export default function CMPLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { cmpType: string }
}) {
  return (
    <div>
      <Script
        src="https://storage.googleapis.com/idward-cmp-v2-dev/light/loader.js"
        strategy="beforeInteractive"
        idw_cmp_provider={params.cmpType}
        idw_client_id="MQ=="
        idw_environment="dev"
      />
      <h2>CMP Script: {params.cmpType}</h2>
      {children}
    </div>
  )
}

export function generateStaticParams() {
  return [{ cmpType: "inmobi" }, { cmpType: "uniconsent" }]
}