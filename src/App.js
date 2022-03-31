import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { CountriesList } from './Components/CountriesList';
import { CountryDetail } from './Components/CountryDetail';
import allCountries from './countries.json'

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList allCountries={ allCountries } />
      <Routes>
        <Route path='/:alpha' element={ <CountryDetail allCountries={ allCountries } /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
