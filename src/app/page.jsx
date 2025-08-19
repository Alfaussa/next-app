
import countries from "./countries/countries"
import Link from "next/link";


export default function Home() {

  const list = countries.map((country) =>{
    return <>
    <li key={country.id}>
      <Link href={`/countries/${country.id}`}>{country.name}</Link>
    </li>
    </>
  })

  return (<>
  <div>
  <ul>{list}</ul>
</div>
</>
  )
}
