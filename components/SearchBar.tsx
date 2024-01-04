'use client';

import { useState } from 'react';

import SearchManufacturer from './SearchManufacturer';

function SearchBar() {
  const [manufacturer, setManufacturer] = useState('');
  const handleSearch = () => {};

  return (
    <div className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </div>
  );
}

export default SearchBar;
