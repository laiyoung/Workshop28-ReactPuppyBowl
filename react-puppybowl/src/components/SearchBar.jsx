import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";

export default function SearchBar({ players, results, setResults }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

  function handleSearch() {
    results = players.filter((player) =>
      player.name.toLowerCase().includes(search.toLowerCase())
    );
    setResults(results);
    console.log(results);
    navigate("/search-results");
  }
  

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <div className="search">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSearch();
          }}
        >
          <label id="playerSearch">Find a Puppy:</label>
          <input
            name="playerSearch"
            type="text"
            placeholder="Puppy's Name"
            onChange={handleChange}
          />
          <button type="submit">Search for a Puppy</button>
        </form>
      </div>
    </>
  );
}
