import Link from "next/link"

export default function Home({
  params,
}: {
  params: { cmpType: string }
}) {
  return (
    <div>
      <h3>Home Page</h3>
      <nav>
        <Link href="./about">About</Link> | <Link href="./contact">Contact</Link>
      </nav>
      <p>Welcome to the home page!</p>
      <p>Current CMP Type: {params.cmpType}</p>
    </div>
  )
}

