import Image from "next/image";
import products from "./goods/goodsData"



export default function Home() {

 let list = products.map((product) =>
  (
    <div>
    <div>{product.name}</div>
    <div>{product.price}</div>
    <div>{product.image}</div>
    </div>
  )
  )

  return (<>

{list}

</>
  )
}
