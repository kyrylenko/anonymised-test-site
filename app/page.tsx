import AppLink from "./components/AppLink";
import SiteSettings from "./components/SiteSettings";

export default function Home() {
  const tagTypes = ["gtm", "native"];
  const cmpTypes = ["inmobi", "uniconsent"];
  const pages = ["home", "about", "contact"];

  return (
    <div>
      <h1>Testing Website</h1>
      <ul>
        {tagTypes.map((tagType) =>
          cmpTypes.map((cmpType) =>
            pages.map((page) => (
              <li key={`${tagType}-${cmpType}-${page}`}>
                <AppLink
                  href={`/${tagType}/${cmpType}/${page}`}
                >{`${tagType}/${cmpType}/${page}`}</AppLink>
              </li>
            ))
          )
        )}
      </ul>
      <SiteSettings/>
    </div>
  );
}
