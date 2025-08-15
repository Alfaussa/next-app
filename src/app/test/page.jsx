import prods from '../prods'
import styles from './style.module.css'

export const metadata = {
	title: 'My Test page',
	description: 'Description for test page.',
}
const textStyle ={
	color: "purple",
	fontSize: "100px"
}
export default function Test() {
	

		return  <>

<p style={textStyle}>text text text</p>

	 </>
	}
