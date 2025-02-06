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
      {params.cmpType === "inmobi" && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Inmobi CMP script
              console.log('Inmobi CMP script loaded');
            `,
          }}
        />
      )}
      {params.cmpType === "uniconsent" && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Uniconsent CMP script
              console.log('Uniconsent CMP script loaded');
            `,
          }}
        />
      )}
      {children}
    </div>
  )
}

export function generateStaticParams() {
  return [{ cmpType: "inmobi" }, { cmpType: "uniconsent" }]
}

