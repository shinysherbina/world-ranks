import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaginationComponent({
  data,
  itemsPerPage,
  handleNoOfCountries,
}) {
  // Set the no of countries found through handleNoOfCountries passed from WorldRankData
  useEffect(() => {
    handleNoOfCountries(data.length);
  }, [data]);

  const navigate = useNavigate();
  const handleCountryClick = (countryCode) => {
    // Data about the country clicked is passed to the CountryDetailPage
    navigate(`/country/${countryCode}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const pageData = data.slice(startIndex, itemsPerPage + startIndex);

  const listItems = pageData.map((data, index) => (
    <tr key={data.cca2}>
      {/* <td>{(currentPage - 1) * 15 + index + 1}</td> */}
      <td>
        <button
          className="flag-button"
          onClick={() => handleCountryClick(data.cca3)}
        >
          <img className="flag" src={data.flags.svg} alt={data.flags.alt} />
        </button>
      </td>
      <td>
        <p>{data.name.common}</p>
      </td>
      <td>
        <p>{data.population.toLocaleString("en-US")}</p>
      </td>
      <td>
        <p>{data.area.toLocaleString("en-US")}</p>
      </td>
      <td>
        <p className="hide-column">{data.region}</p>
      </td>
    </tr>
  ));

  return (
    <div className="rank-table-main-data">
      <table>
        <thead className="be-vietnam-pro-medium small">
          <tr>
            {/* <th>Rank</th> */}
            <th>Flag</th>
            <th>Name</th>
            <th>Population</th>
            <th>
              Area(km<sup>2</sup>)
            </th>
            <th className="hide-column">Region</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>

      <div className="page">
        {[...Array(totalPages)].map((_, index) => (
          <button
            className={`page-number ${currentPage === index + 1 && "active"}`}
            key={index}
            onClick={() => handleCurrentPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
