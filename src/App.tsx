import { useState } from "react"

const countries = [
  {
    name: 'India',
    id: 1
  },
  {
    name: 'USA',
    id: 2
  },
  {
    name: 'UK',
    id: 3
  }
]

const App = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  
  const handleSelectAll = () => {
    const countryNames = countries.map(country => country.name);

    if (selectedCountries.length === countries.length) {
      setSelectedCountries([]);
      return;
    }

    setSelectedCountries(countryNames);
  }

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;
    if (checked) {
      setSelectedCountries([...selectedCountries, name]);
    } else {
      setSelectedCountries(selectedCountries.filter(country => country !== name));
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        marginTop: '80px'
      }}
    >
      <label 
        htmlFor="Select All"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        Select all
        <input 
          type="checkbox" 
          name="Select All" 
          onChange={handleSelectAll}
          checked={selectedCountries.length === countries.length}
        />
      </label>
      {
        countries.map((country, index) => {
          return (
            <label 
              htmlFor={country.name}
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              {country.name}
              <input 
                type="checkbox" 
                name={country.name} 
                id={country.name} 
                checked={selectedCountries.includes(country.name)}
                onChange={handleSelect}
              />
            </label>
          )
        })
      }
    </div>
  )
}

export default App;