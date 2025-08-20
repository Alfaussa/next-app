import prods from "../prods"
import Link from "next/link"

const List = () => {

    let list = prods.map((prod) =>(
        <div>{prod.name}</div>
    ))

  return (
    <Link href={'../prods/'}>{list}</Link>
  )
}

export default List