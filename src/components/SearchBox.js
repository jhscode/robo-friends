import React from 'react';

const SearchBox = ({searchField, onSearchChange}) => {
  return (
    <div className="pa2">
      <input 
        className="pa3 b b--green bg-lightest-blue"
        type="search" 
        placeholder="search robots" 
        onChange={onSearchChange}
      />
    </div>
  )
}

export default SearchBox;