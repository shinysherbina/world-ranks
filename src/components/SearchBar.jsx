import React from "react";

export default function SearchBar({ searchText, onSearchTextChange }) {
  return (
    <div>
      <input
        className="search-bar be-vietnam-pro-medium"
        type="search"
        placeholder="Search by Name, Region, Subregion"
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
    </div>
  );
}
