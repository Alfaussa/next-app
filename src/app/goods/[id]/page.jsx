import React from 'react'
import products from '../goodsData'

const Item = ({params}) => {

    const good = +params.id
 
  const res =  products.find((product)=>
    (product.id === good)
)

    
  return (<>
  <div className='m-5'>
    <h2 className='font-black mb-3'>{res.name}</h2>
    <p className='font-bold mb-3'>Цена: {res.price}</p>
    <div className='flex'>
    <img className="size-70 shadow-xl rounded-md mr-5"src={res.image}></img>
    <p>{res.description}</p></div>
    </div>
</>
  )
}

export default Item