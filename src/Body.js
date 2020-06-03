import React from 'react';

const Body =(props)=>{
    return (
      <div className='row '>
        {props.countriesAll.map((element,index) => {
          return (
            <div key={index} className="col-2 div-container ">
              <img className="flags" src={element.flag} alt="countries-flag" />
              <ul className="dataContainer">
                   
                <li>{element.name}</li>
                <li>Population: {element.population}</li>
                <li>Region: {element.region}</li>
                <li>Capital: {element.capital}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
}

export default Body;
