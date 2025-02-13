import AppLink from "@/app/components/AppLink"

export default function Contact() {
  return (
    <div>
      <h3>Contact Page</h3>
      <nav>
        <AppLink href="./home">Home</AppLink> | <AppLink href="./about">About</AppLink>
      </nav>
      <p>Contact us here.</p>
    </div>
  )
}

