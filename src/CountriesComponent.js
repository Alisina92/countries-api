import React,{useState} from 'react';
import Header from './Header';
import Body from './Body';
import countriesAll from'./countryData/countriesAll.json';

const CountriesComponent =()=>{
  const [searchTerm,setSearchTerm]=useState(countriesAll);
      const changeHandler =(event)=>{
            const result = countriesAll.filter(element=>{
               return element.name
                 .toLowerCase()
                 .includes(event.target.value.toLowerCase()) || element.capital.toLowerCase().includes(event.target.value.toLowerCase());
           })
             
           setSearchTerm(result)
           return true;
        }
     
    return (
      <div>
        <Header countriesAll={countriesAll} onSearch={changeHandler} />
        <Body countriesAll={searchTerm} />
      </div>
    );
}

export default CountriesComponent;