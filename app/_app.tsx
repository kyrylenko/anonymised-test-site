// "use client"

// //The `_app.tsx` file ensures that even if some part of your app tries to use client-side navigation, it will be intercepted and turned into a full page load.
// //remove it if want to use client-side navigation
// import type { AppProps } from "next/app"
// import { useEffect } from "react"
// import { useRouter } from "next/router"

// function MyApp({ Component, pageProps }: AppProps) {
//   const router = useRouter()

//   useEffect(() => {
//     const handleRouteChange = (url: string) => {
//       window.location.href = url
//     }

//     router.events.on("routeChangeStart", handleRouteChange)

//     return () => {
//       router.events.off("routeChangeStart", handleRouteChange)
//     }
//   }, [router])

//   return <Component {...pageProps} />
// }

// export default MyApp