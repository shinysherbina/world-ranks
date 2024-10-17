import React, { useState } from "react";

import SortData from "../components/SortData";
import FilterData from "../components/FilterData";
import StatusData from "../components/StatusData";
import SearchBar from "../components/SearchBar";
import WorldData from "../components/WorldData";

function WorldRankTable({ worldData }) {
  const [sortField, setSortFied] = useState("population");
  const [selectedRegion, setSelectedRegion] = useState([]);
  const [isUnMember, setIsUnMember] = useState("");
  const [independent, setIndependent] = useState("");
  const [searchText, setSearchText] = useState("");
  const [noOfCountries, setNoOfCountries] = useState(0);

  return (
    <div className="rank-table">
      <div className="rank-table-top">
        <p>Found {noOfCountries} countries</p>
        <SearchBar searchText={searchText} onSearchTextChange={setSearchText} />
      </div>
      <div className="rank-table-body">
        <div className="rank-table-side">
          <SortData sortField={sortField} onSortFieldChange={setSortFied} />
          <FilterData
            selectedRegion={selectedRegion}
            onSelectedRegionChange={setSelectedRegion}
          />
          <StatusData
            isUnMember={isUnMember}
            onIsUnMemberChange={setIsUnMember}
            independent={independent}
            onIndependentChange={setIndependent}
          />
        </div>
        <WorldData
          worldData={worldData}
          sortField={sortField}
          selectedRegion={selectedRegion}
          isUnMember={isUnMember}
          independent={independent}
          searchText={searchText}
          handleNoOfCountries={setNoOfCountries}
        />
      </div>
    </div>
  );
}

export default WorldRankTable;
