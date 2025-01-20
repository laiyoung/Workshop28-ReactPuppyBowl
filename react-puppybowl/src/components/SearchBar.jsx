import React from "react";
import { useState } from "react";

export default function SearchBar({ players }) {
  const [search, setSearch] = useState("");

  function handleSearch() {
    const result = players.filter((player) =>
      player.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(result);
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
