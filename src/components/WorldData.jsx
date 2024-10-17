import React from "react";
import PaginationComponent from "./PaginationComponent";

export default function WorldData({
  worldData,
  sortField,
  selectedRegion,
  isUnMember,
  independent,
  searchText,
  handleNoOfCountries,
}) {
  const itemsPerPage = 15;

  // Filter the world data based on Region, unMember , Independent and SearchText
  const filteredWorldData = worldData.filter((country) => {
    const searchLowerCase = searchText ? searchText.toLowerCase() : null;
    return (
      (selectedRegion.length !== 0
        ? selectedRegion.includes(country.region)
        : true) &&
      (isUnMember ? country.unMember : true) &&
      (independent ? country.independent : true) &&
      (searchLowerCase
        ? country.name?.common?.toLowerCase().includes(searchLowerCase) ||
          country.region?.toLowerCase().includes(searchLowerCase) ||
          country.subregion?.toLowerCase().includes(searchLowerCase)
        : true)
    );
  });

  // Sort based on selected criteria
  const sortedItems = [...filteredWorldData].sort((a, b) => {
    const valueA = sortField === "name" ? a.name.common : a[sortField];
    const valueB = sortField === "name" ? b.name.common : b[sortField];
    if (valueA > valueB) {
      return sortField === "name" ? 1 : -1; // Sort in ascending if name is chosen else descending
    } else if (valueA < valueB) {
      return sortField === "name" ? -1 : 1; // Sort in ascending if name is chosen else descending
    }
    return 0;
  });

  return (
    <div className="rank-table-main">
      <PaginationComponent
        data={sortedItems}
        itemsPerPage={itemsPerPage}
        handleNoOfCountries={handleNoOfCountries}
      />
    </div>
  );
}
