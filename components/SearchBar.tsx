'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SearchManufacturer from './SearchManufacturer';

const SearchButton = ({ buttonStyles }: { buttonStyles: string }) => (
  <button type="submit" className={`ml-3 z-10 ${buttonStyles}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="Magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

function SearchBar() {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === '' && model === '') {
      return alert('Please fill in the search bar');
    }
    updateSearchParams(
      model.toLocaleLowerCase(),
      manufacturer.toLocaleLowerCase()
    );
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }
    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton buttonStyles="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="Model Icon"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => {
            setModel(e.target.value);
          }}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton buttonStyles="sm:hidden" />
      </div>
      <SearchButton buttonStyles="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
