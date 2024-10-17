import React, { useEffect, useState } from "react";
import WorldRankTable from "./WorldRankTable";
import CountryDetailPage from "./CountryDetailPage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [worldData, setWorldData] = useState([]);
  const [countryNameList, setCountryNameList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setWorldData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const countryList = {};
    if (worldData) {
      worldData.map((data) => {
        countryList[data.cca3] = {
          name: data.name.common,
          flags: data.flags,
        };
      });
      setCountryNameList(countryList);
    }
  }, [worldData]);

  return (
    <div className="app">
      <img
        src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
        alt="World Ranks Logo"
      />
      <Router>
        <Routes>
          <Route path="/" element={<WorldRankTable worldData={worldData} />} />
          <Route
            path="/country/:countryCode"
            element={
              <CountryDetailPage
                worldData={worldData}
                countryNameList={countryNameList}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
