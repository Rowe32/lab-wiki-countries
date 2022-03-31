import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { CountriesList } from './Components/CountriesList';
import { CountryDetails } from './Components/CountryDetails';
import allCountries from './countries.json';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="countries-section">
        <div className="countries-list" >
          <CountriesList allCountries={allCountries} />
        </div>
        <div className="country-details">
          <Routes>
            <Route
              path="/:alpha"
              element={<CountryDetails allCountries={allCountries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
