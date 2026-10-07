import { useState, useEffect } from 'react'

const Country = ({country}) => {
    // const [weather, setWeather] = useState(null)
    // useEffect(() => {
    //   console.log("fethcing weater")
    //   axios
    //     .get()
    //     .then(response => {setWeather(response.data)})
    // }, [country])
    const langs = Object.values(country.languages)
    const imgStyle = {
        width: '200px',
        height: 'auto'
    }

    return(
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital {country.capital[0]}</p>
            <p>Area {country.area}</p>
            <h2>Languages</h2>
            <ul>
                {langs.map(lang => 
                    <li>{lang}</li>
                )}
            </ul>
            <img src={country.flags.svg} 
                style={imgStyle}
            />
        </div>
    )
}

const Countries = ({filteredCountries}) => {
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    setSelectedCountry(null)
  }, [filteredCountries])

  if(!filteredCountries){
    return null
  }
  if(filteredCountries.length > 10){
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
  if(filteredCountries.length === 1) {
    return (
      <div>
        <Country country={filteredCountries[0]}/>
      </div>
    )
  }
  if(selectedCountry) {
    return (
      <div>
        <Country country={selectedCountry} />
      </div>
    )
  }
  return (
    <div>
        {filteredCountries.map(country => 
            <div>
              {country.name.common}
              <button onClick={() => setSelectedCountry(country)}>show</button>
            </div>)}
    </div>
  )
}

export default Countries