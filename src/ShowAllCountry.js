import React from "react";
import countries from "./countriesAll.json";

const ShowAllCountry = () => {
  return (
    <div className="allCountry">
      {countries.map((country, index) => {
        return (
          <div key={index} className="country">
            {console.log(country.flag)}
            <img alt="Country Flag" src={country.flag}></img>
            <div className="countryDetail">
              <h3>{country.name}</h3>
              <p>
                <span>Population: </span>
                {Number(country.population).toLocaleString()}
              </p>
              <p>
                <span>Region: </span>
                {country.region}
              </p>
              <p>
                <span>Capital: </span>
                {country.capital}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ShowAllCountry;
