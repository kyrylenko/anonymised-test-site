import CustomLink from "@/app/components/CustomLink"
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
        <CustomLink href="./about">About</CustomLink> | <CustomLink href="./contact">Contact</CustomLink>
      </nav>
      <p>Welcome to the home page!</p>
      <p>Current CMP Type: {params.cmpType}</p>
    </div>
  )
}

