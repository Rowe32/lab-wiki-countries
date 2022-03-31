import { Link, useParams} from 'react-router-dom';
import React from 'react';
import {useState, useEffect} from 'react'; 


export function CountryDetails( {allCountries} ) {
    const params = useParams();
    const [country, setCountry] = useState();
    const singleCountry = allCountries.filter((country) => {
        return country.alpha3Code === params.alpha;
    });
    
    return(
        <p>{singleCountry[0].name.common}</p>
    );
};