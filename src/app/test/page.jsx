import data from './data'

export default function Test() {
	
	let list = data.map(function(item){
		return  <li>{item}</li>
	})
return <>
<h1>Test</h1>
<ul>
	{list}
</ul>
</>
}