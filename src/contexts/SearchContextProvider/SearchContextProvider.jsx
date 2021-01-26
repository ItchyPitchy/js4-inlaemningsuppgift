import React, { useState, createContext } from "react";

export const SearchContext = createContext({});

export default function SearchContextProvider({ children }) {
  const [searchData, setSearchData] = useState({});

  return (
    <SearchContext.Provider
      value={{ searchData, setSearchData }}
    >
      {children}
    </SearchContext.Provider>
  );
}
