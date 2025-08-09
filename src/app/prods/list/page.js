import prods from "../prods"

const List = () => {

    let list = prods.map((prod) =>(
        <ul>{prod.name}</ul>
    ))

  return (
    <div>{list}</div>
  )
}

export default List