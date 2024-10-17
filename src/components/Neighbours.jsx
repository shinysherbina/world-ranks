import { useNavigate } from "react-router-dom";
import React from "react";

export default function Neighbours({ borders, countryNameList }) {
  const navigate = useNavigate();
  const handleCountryClick = (countryCode, data) => {
    // Data about the country clicked is passed to the CountryDetailPage
    navigate(`/country/${countryCode}`);
  };

  return (
    <div className="country-neighbour-container">
      <p>Neighbouring Countries</p>
      <div className="country-neighbours">
        {borders.map((border) => {
          const country = countryNameList[border];
          return (
            <div className="country-neighbour" key={border}>
              <button
                className="flag-btn"
                onClick={() => handleCountryClick(border)}
              >
                <img
                  className="flag-img"
                  src={country.flags.svg}
                  alt={country.flags.alt}
                />
              </button>

              <p className="light-color">{country.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
