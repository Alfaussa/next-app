import React from 'react'
import countries from '../../countries';
import Link from 'next/link';

const City = ({params }) => {

const cityId = params.id
 
const choosenCity = countries
.flatMap(country =>country.cities)
.find((city)=>(city.id === cityId))

const choosenCountry = countries.find(country =>
    country.cities.some(city=> city.id === cityId)
)
  return (<>
  <h2>{choosenCity.name}</h2>
    <div>{choosenCity.description}</div>
    <Link href={`../${choosenCountry.id}`}>{choosenCountry.name}</Link>
    </>
  )
}

export default City