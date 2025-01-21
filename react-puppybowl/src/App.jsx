import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import SearchBar from "./components/SearchBar";
import { getPlayers } from "./api";
import SearchResults from "./components/SearchResults";

function App() {
  const [players, setPlayers] = useState([]);
  const [results, setResults] = useState([]);

  async function getData() {
    const playerData = await getPlayers();
    setPlayers(playerData);
    console.log(playerData);
  }

  return (
    <>
      <h1>Welcome to Puppy Bowl!</h1>
      <div>
        <SearchBar
          players={players}
          setResults={setResults}
          results={results}
        ></SearchBar>{" "}
      </div>
      <div>
        {" "}
        <NewPlayerForm getData={getData} />
      </div>

      <div>
        <Routes>
          <Route
            path="/"
            element={
              <AllPlayers
                players={players}
                setPlayers={setPlayers}
                getData={getData}
              />
            }
          />
          <Route
            path="/search-results"
            element={<SearchResults results={results} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
