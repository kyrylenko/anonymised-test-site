import CustomLink from "@/app/components/CustomLink"
import Link from "next/link"

export default function Contact() {
  return (
    <div>
      <h3>Contact Page</h3>
      <nav>
        <CustomLink href="./home">Home</CustomLink> | <CustomLink href="./about">About</CustomLink>
      </nav>
      <p>Contact us here.</p>
    </div>
  )
}

