import posts from './data'

export default function Test() {
	
	let list = posts.map(function(item){
		return  <li>{item}</li>
	})
return <>
<h1>Test</h1>
<ul>
	{list}
</ul>
</>
}