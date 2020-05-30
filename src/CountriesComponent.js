import React from 'react';
import Header from './Header';
import Body from './Body';
import countriesAll from'./countryData/countriesAll.json';
const CountriesComponent =()=>{
    return(<div>
     <Header/>
     <Body countryData={countriesAll}/>
    </div>)
}

export default CountriesComponent;