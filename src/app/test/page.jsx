import prods from '../prods'
import Product from '@/comp/product/Product'

export const metadata = {
	title: 'My Test page',
	description: 'Description for test page.',
}

export default function Test() {
	

		return  <>
		<Product name='alfa' cost='500' />
		<table border="1" cellPadding="8">
			  <thead>
		<tr>
			<th>id</th>
			<th>name</th>
			<th>cost</th>
		</tr>
		</thead>
		  <tbody>
    
		{prods.map((prod)=>(
			<tr key = {prod.id}>
<td>{prod.id}</td>
<td>{prod.name}</td>
		 <td>{prod.cost}</td>
		   </tr>
		))}
		
		 
		
  
  </tbody>
		</table>
		</>
	}
