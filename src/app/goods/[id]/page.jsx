import React from 'react'
import products from '../goodsData'

const Item = ({params}) => {

    const good = +params.id
 
  const res =  products.find((product)=>
    (product.id === good)
)

    
  return (<>
    <div>{res.name}</div>
    <div>{res.price}</div>
    <div>{res.image}</div>
    <div>{res.description}</div>
</>
  )
}

export default Item