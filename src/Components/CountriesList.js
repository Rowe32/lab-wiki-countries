import React from 'react';
import { Link } from 'react-router-dom';

export function CountriesList( { allCountries }) {
    return <div> {allCountries.map((elem, i) => {
        return (
            <div key={elem.name.common+ i}>
                <Link to={elem.alpha3Code}> {elem.name.common}</Link>
            </div>
        )
    })} </div>
}