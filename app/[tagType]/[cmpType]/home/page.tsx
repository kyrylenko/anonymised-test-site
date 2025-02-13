import AppLink from "@/app/components/AppLink"

export default function Home({
  params,
}: {
  params: { cmpType: string }
}) {
  return (
    <div>
      <h3>Home Page</h3>
      <nav>
        <AppLink href="./about">About</AppLink> | <AppLink href="./contact">Contact</AppLink>
      </nav>
      <p>Welcome to the home page!</p>
      <p>Current CMP Type: {params.cmpType}</p>
    </div>
  )
}

