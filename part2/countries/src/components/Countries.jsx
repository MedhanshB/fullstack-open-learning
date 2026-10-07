const Country = ({country}) => {
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
  return (
    <div>
        {filteredCountries.map(country => 
            <div>{country.name.common}</div>)}
    </div>
  )
}

export default Countries