import Link from "next/link"

export default function Home() {
  const tagTypes = ["gtm", "native"]
  const cmpTypes = ["inmobi", "uniconsent"]
  const pages = ["home", "about", "contact"]

  return (
    <div>
      <h1>Testing Website</h1>
      <ul>
        {tagTypes.map((tagType) =>
          cmpTypes.map((cmpType) =>
            pages.map((page) => (
              <li key={`${tagType}-${cmpType}-${page}`}>
                <Link href={`/${tagType}/${cmpType}/${page}`}>{`${tagType}/${cmpType}/${page}`}</Link>
              </li>
            )),
          ),
        )}
      </ul>
    </div>
  )
}

