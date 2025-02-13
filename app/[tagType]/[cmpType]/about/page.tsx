import AppLink from "@/app/components/AppLink"

export default function About() {
  return (
    <div>
      <h3>About Page</h3>
      <nav>
        <AppLink href="./home">Home</AppLink> | <AppLink href="./contact">Contact</AppLink>
      </nav>
      <p>This is the about page.</p>
    </div>
  )
}

