import React from "react";
import { useState } from "react";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import SearchBar from "./components/SearchBar";

function App() {
  

  return (
    <>
      <h1>Welcome to Puppy Bowl!</h1>
      <div>
        <SearchBar></SearchBar>{" "}
      </div>
      <div>
        {" "}
        <NewPlayerForm ></NewPlayerForm>
      </div>
      <div>
        <AllPlayers ></AllPlayers>
      </div>
    </>
  );
}

export default App;
