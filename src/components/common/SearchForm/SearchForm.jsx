import React, { useContext, useState } from "react";
import { fetchJobs } from "../../../API";
import { SearchContext } from "../../../contexts/SearchContextProvider/SearchContextProvider";

export default function SearchForm({ setJobList, setNoJobsFound }) {
  const { searchData, setSearchData } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const description = inputValue.split(" ").join("+");

    if (searchData[description]) {
      setJobList(searchData[description]);
    } else {
      fetchJobs(description, setNoJobsFound, setSearchData, setJobList);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button>Sök</button>
    </form>
  );
}
