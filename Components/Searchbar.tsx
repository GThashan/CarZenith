"use client";

import React, { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { manufacturers } from "../constant";

function Searchbar() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const [selectedManufacturer, setSelectedManufacturer] = useState<
    string | null
  >(manufacturers[0]);
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((manufacturer) =>
          manufacturer.toLowerCase().includes(query.toLowerCase())
        );

  return (
    
      <Combobox value={selectedManufacturer} onChange={setSelectedManufacturer}>
        <ComboboxInput
          aria-label="Search Manufacturer"
          displayValue={(manufacturer: string | null) => manufacturer || ""}
          onChange={(event) => setQuery(event.target.value)}
          className="border p-2 outline-none rounded-lg"
        />
        <ComboboxOptions className="border empty:invisible">
          {filteredManufacturers.length === 0 && query !== "" ? (
            <div className="p-2 text-white bg-red-700">No manufacturers found.</div>
          ) : (
            filteredManufacturers.map((manufacturer) => (
              <ComboboxOption
                key={manufacturer}
                value={manufacturer}
                className="p-2 hover:bg-blue-500 hover:text-white"
              >
                {manufacturer}
              </ComboboxOption>
            ))
          )}
        </ComboboxOptions>
      </Combobox>
 
  );
}

export default Searchbar;
