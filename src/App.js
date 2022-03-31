import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { CountriesList } from './Components/CountriesList';
import { CountryDetails } from './Components/CountryDetails';
//import allCountries from './countries.json';

function App() {
  const [data, setData] = useState([]);
  const endpoint = 'https://ih-countries-api.herokuapp.com/countries';

  useEffect(() => {
    async function fetchCountriesData() {
      const response = await fetch(endpoint);
      const responseAsJson = await response.json();
      setData(responseAsJson);
    }
    fetchCountriesData();
  }, []);


  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="countries-section">
        <div className="countries-list">
          <CountriesList allCountries={ data } />
        </div>
        <div className="country-details">
          <Routes>
            <Route
              path="/:alpha"
              element={<CountryDetails allCountries={ data } />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
