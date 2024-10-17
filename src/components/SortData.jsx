import React from "react";

export default function SortData({ sortField, onSortFieldChange }) {
  return (
    <div className="sort-bar">
      <label className="be-vietnam-pro-medium small">Sort by </label>
      <select
        className="be-vietnam-pro-medium medium"
        name="sortValue"
        value={sortField}
        onChange={(e) => {
          onSortFieldChange(e.target.value);
        }}
      >
        <option value="population">Population</option>
        <option value="name">Name</option>
        <option value="area">Area</option>
      </select>
    </div>
  );
}
