import Link from "next/link"

export default function Contact() {
  return (
    <div>
      <h3>Contact Page</h3>
      <nav>
        <Link href="./home">Home</Link> | <Link href="./about">About</Link>
      </nav>
      <p>Contact us here.</p>
    </div>
  )
}

