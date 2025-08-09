import prods from "../../prods"

const Desc = ({params}) => {

    let prod = prods[params.id - 1]
    
    if (!prod) {
        return <>
        <p>not found</p>
        </>
    }
  return (
    <div>{prod.desc}</div>
  )
}

export default Desc