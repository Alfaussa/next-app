
import products from "./goods/goodsData"
import Link from "next/link";


export default function Home() {

 const list = products.map((product) =>(
<div className="flex w-50 h-100% border rounded-lg">
  <li className="p-5" key={product.id}>
  <Link href={`/goods/${product.id}`}>
  
  <h2 className="font-black text-center">{product.name}</h2>
  <p  className="mt-2 mb-2  ">Цена: {product.price}</p>
  <img className="size-50 shadow-xl rounded-md"src={product.image}></img>
  
  </Link>
  </li>
</div>
 ))
  

  return (<>

<div className="flex " >
  <ul className="flex gap-4 flex-wrap ">{list}</ul>

  </div>

</>
  )
}
