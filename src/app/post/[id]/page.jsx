import React from 'react'
import posts from '../posts'

export const generateMetadata = ({params}) => { 
return{
 title: `page for post ${params.id}`,
description:`Description for user "${posts[params.id]}"`,
}
};


export default function Post({params})  {

    const item = posts[params.id - 1];


  return (<>
    <p>{item.title}</p>
    <p>{item.id}</p>
    <p>{item.desc}</p>
    <p>{item.text}</p>
  </>)
}

