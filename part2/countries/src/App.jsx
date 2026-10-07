import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from "./components/Countries"


const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    console.log("fetching countries")
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => {setCountries(response.data)})
  }, [])

  if(!countries) {
    return null
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const filteredCountries = value === "" ? null : 
      countries.filter(
      country => country.name.common.toLowerCase().includes(value))
  

  return (
    <div>
        find countries <input value={value} onChange={handleChange} />
      <Countries filteredCountries={filteredCountries} />
    </div>
  )
}

export default App 