'use client';

import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types';
import { manufacturers } from '@/constants/constants';
import { Span } from 'next/dist/trace';

function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  const [query, setQuery] = useState('');
  const filterManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '') //remove empty space
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="Car Logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          ></Combobox.Input>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => {
              setQuery('');
            }}
          >
            <Combobox.Options>
              {filterManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) => `
                                relative search-manufacturer__option
                                ${
                                  active
                                    ? `bg-primary-blue text-white`
                                    : 'text-gray-900'
                                }`}
                  value={item}
                >
                  {({ selected, active }) => (
                    <li>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item}
                      </span>
                      {selected && (
                        <span
                          className={`absolute
                          inset-y-0 left-0 flex
                          item-center pl-3 ${
                            active ? 'bg-white' : 'bg-teal-600'
                          }`}
                        ></span>
                      )}
                    </li>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
