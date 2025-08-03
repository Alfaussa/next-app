'use client'
import { React, useState } from "react";

export default function Test() {

const [firstInput, setFirstInput] = useState(null);
const [secondInput,setSecondInput] = useState(null);
const [res,setRes] = useState(null);

const handleInput1 = (e) => {
setFirstInput(e.target.value)
}
const handleInput2 = (e) => {
setSecondInput(e.target.value)
}	

const handleClick = () => {

setRes(Number(firstInput)+Number(secondInput))

}



		return <>
		<input type="number" value={firstInput} onChange={handleInput1} style={{backgroundColor:'white', border: "1px solid"}}></input>
		 <input type="number" value={secondInput} onChange={handleInput2}style={{backgroundColor:'white', border: "1px solid"}}></input>		
	<button style={{backgroundColor:'red', border: "3px solid"}} onClick={handleClick}>btn</button>
	<p style={{backgroundColor:'grey', border: "1px solid"}}>{res}</p>
		</>
	


}