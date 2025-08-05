import React from 'react'
let posts = [
	'name1',
	'name2',
	'name3',
	'name4',
	'name5',
];
const City = ({params}) => {
    const name = params.name
    const post = posts[name-1]
  return (<>
    <div>city #{name}</div>
    <p>{post}</p>
</>
  )
}

export default City 
