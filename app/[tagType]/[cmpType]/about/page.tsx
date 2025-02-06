import Link from "next/link"

export default function About() {
  return (
    <div>
      <h3>About Page</h3>
      <nav>
        <Link href="./home">Home</Link> | <Link href="./contact">Contact</Link>
      </nav>
      <p>This is the about page.</p>
    </div>
  )
}

