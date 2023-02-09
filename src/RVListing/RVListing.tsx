import React from "react"
import { useSearch } from "../hooks/search";
import { RVListItem } from "./components/RVListItem";
import './RVListing.css';
import { SearchBar } from "./components/SearchBar";

export const RVListing: React.FC = () => {
  const rvList = useSearch();

  const onClearSearch = () => {
    rvList.resetFilters();
  }

  const onSearch = (keyword: string) => {
    console.log(keyword)
    
    rvList.setFilters({...rvList.filters, filter: {
      keywords: keyword
    }})
  }

  return (
    <div className="rv-listing">
      <SearchBar onClear={onClearSearch} onSearch={onSearch} className="rv-listing-search-bar"/>
      <div className="rv-listing-results">
        {rvList.isLoading? <div>'loading listing...'</div> : 
          rvList.data? 
            Array.isArray(rvList.data) ? 
            rvList.data!.map((rv)=>
              <RVListItem rv={rv} key={rv.id}  className="rv-listing-results-item"/>
            ): <RVListItem rv={rvList.data} className="rv-listing-results-item" /> 
          : <div>No results</div>
        }
      </div>
    </div>
 
  )
}