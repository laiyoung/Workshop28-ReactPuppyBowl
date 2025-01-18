import React from "react";

export default function SearchBar() {
        function handleSearch() {}
        function handleChange(){}
   return (
        <>
        <div className="search"> 
              <form onSubmit={handleSearch}>
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
