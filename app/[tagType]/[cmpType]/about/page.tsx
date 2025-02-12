import CustomLink from "@/app/components/CustomLink"
import Link from "next/link"


export default function About() {
  return (
    <div>
      <h3>About Page</h3>
      <nav>
        <CustomLink href="./home">Home</CustomLink> | <CustomLink href="./contact">Contact</CustomLink>
      </nav>
      <p>This is the about page.</p>
    </div>
  )
}

