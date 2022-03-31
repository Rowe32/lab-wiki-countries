import React from 'react';
import { useParams} from 'react-router-dom';


export function CountryDetails( { allCountries } ) {
    const params = useParams();

    const urlImage = "https://flagpedia.net/data/flags/icon/72x54/"

    const singleCountry = allCountries.filter((country) => {
        return country.alpha3Code === params.alpha;
    });
    

    return(
        <>
            <img src={urlImage + singleCountry[0].alpha2Code.toLowerCase() + '.png'} alt={singleCountry[0].name.common} />
            <p>{singleCountry[0].name.common}</p>
        </>
    );
};