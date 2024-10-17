import React from "react";
import { useParams } from "react-router-dom";
import Neighbours from "../components/Neighbours";

export default function CountryDetailPage({ worldData, countryNameList }) {
  const { countryCode } = useParams();
  const data = worldData.find((country) => country.cca3 === countryCode);
  console.log(data);
  const currencyCode = Object.keys(data.currencies)[0];
  const currency = data.currencies[currencyCode].name;

  return (
    <div className="country-container">
      <img className="country-flag" src={data.flags.svg} alt={data.flags.alt} />
      <div className="country-name">
        <p className="extra-large  light-color">{data.name.common}</p>
        <p className="light-color">{data.name.official}</p>
      </div>
      <div className="country-population-area">
        <div className="country-highlight">
          <p className="light-color medium country-highlight-element">
            Population{" "}
          </p>
          <div className="country-highlight-element">
            <p className="light-color data country-highlight-element left-border">
              {data.population.toLocaleString("en-US")}
            </p>
          </div>
        </div>
        <div className="country-highlight">
          <p className="light-color medium country-highlight-element">
            Area(km<sup>2</sup>){" "}
          </p>
          <div className="country-highlight-element">
            <p className="light-color data country-highlight-element left-border">
              {data.area.toLocaleString("en-US")}
            </p>
          </div>
        </div>
      </div>
      <div className="country-info">
        <p>Capital</p>
        <p className="light-color"> {data.capital[0]}</p>
      </div>
      <div className="country-info">
        <p>Sub Region</p>
        <p className="light-color"> {data.subregion}</p>
      </div>
      <div className="country-info">
        <p>Languages</p>
        <p className="light-color">
          {Object.entries(data.languages)
            .map(([code, language]) => language)
            .join(", ")}
        </p>
      </div>
      <div className="country-info">
        <p>Currencies</p>
        <p className="light-color"> {currency}</p>
      </div>
      <div className="country-info">
        <p>Continent</p>
        <p className="light-color"> {data.continents[0]}</p>
      </div>

      <Neighbours borders={data.borders} countryNameList={countryNameList} />
    </div>
  );
}
