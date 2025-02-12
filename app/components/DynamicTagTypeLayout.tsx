"use client";

import type React from "react";
import Script from "next/script";
import { useSelectedLayoutSegment } from "next/navigation";
//import InmobiCmpTag from "./InmobiCmpTag";
import ClickIoCmpTag from "./ClickIoCmpTag";

export default function DynamicTagTypeLayout({
  tagType,
  children,
}: {
  tagType: string;
  children: React.ReactNode;
}) {
  const cmpType = useSelectedLayoutSegment() as "inmobi" | "uniconsent" | null;

  return (
    <div>
      <h1>Tag Installation: {tagType}</h1>
      {tagType === "gtm" && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T67QMMM');
            `,
          }}
        />
      )}
      {cmpType === "uniconsent" && tagType === "native" && (
        <>
          <Script
            src="https://cmp.uniconsent.com/v2/stub.min.js"
            strategy="beforeInteractive"
          />
          <Script
            src="https://cmp.uniconsent.com/v2/a635b6eb30/cmp.js"
            strategy="beforeInteractive"
          />
        </>
      )}
      {cmpType === "inmobi" && tagType === "native" && <ClickIoCmpTag />}
      {cmpType && tagType === "native" && (
        <Script
          src="https://storage.googleapis.com/idward-cmp-v2-dev/light/loader.js"
          strategy="beforeInteractive"
          idw_cmp_provider={cmpType}
          idw_client_id="MQ=="
          idw_environment="dev"
        />
      )}
      <p>Tag Type: {tagType}</p>
      <p>CMP Type: {cmpType || "Not selected"}</p>
      {children}
    </div>
  );
}
