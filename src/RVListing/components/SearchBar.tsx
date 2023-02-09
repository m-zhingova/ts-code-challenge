import React, { useState } from "react"
import './SearchBar.css'

interface SearchBarProps {
  onSearch: (value: string) => void;
  onClear:() => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({onSearch, onClear, className, ...rest}) => {
  const [value, setValue] = useState('');

  const handleClear = () => {
    setValue('');
    onClear();
  }

  return (
    <div className={`search-bar ${className}`} {...rest}>
        <input
          className="search-bar-input"
          type="text"
          value={value}
          placeholder="Type a keyword"
          onChange={(e)=> setValue(e.target.value)}
        />
      <div className="search-bar-actions">
        <button 
          className="search-bar-button"
          onClick={() => onSearch(value)}
        >
          Search
        </button>
        <button 
          className="search-bar-button"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
     
    </div>
 
  )
}