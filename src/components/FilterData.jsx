import React from "react";

export default function FilterData({ selectedRegion, onSelectedRegionChange }) {
  const regions = [
    "Americas",
    "Antartic",
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
  ];

  // Add the selected region into the array. If clicked again, deselect it
  function handleSelectedRegion(region) {
    onSelectedRegionChange(
      (selectedRegion) =>
        selectedRegion.includes(region)
          ? selectedRegion.filter((r) => r !== region) // Already present? Remove
          : [...selectedRegion, region] // Else add
    );
  }

  // Create a button for each region
  return (
    <div className="region">
      <label>Region</label>
      <div className="region-buttons-area">
        {regions.map((region) => {
          return (
            <button
              className={`region-button be-vietnam-pro-medium medium ${
                selectedRegion.includes(region) && "active"
              }`}
              value={region}
              key={region}
              onClick={() => handleSelectedRegion(region)}
            >
              {region}
            </button>
          );
        })}
      </div>
    </div>
  );
}
