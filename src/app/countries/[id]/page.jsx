import React from 'react'
import countries from '../countries'
import Link from 'next/link';

const CountryItem = ({params}) => {

    const Item = params.id;

const choosenCountry = countries.find((country) => (
    country.id === Item

))

const cityList = choosenCountry.cities.map((city)=>{
    return(

    <li key={city.id}> 
      <Link href={`./cities/${city.id}`}> {city.name}  </Link>
        </li>
   )

})



  return (<>
    <div>{choosenCountry.name}</div>
       <div>{choosenCountry.description}</div>
    <div><ul>{cityList}</ul></div>
  </>)
}

export default CountryItem