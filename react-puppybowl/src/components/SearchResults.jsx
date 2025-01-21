import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchResults({ results }) {
  const navigate = useNavigate();

  async function handleBack() {
    navigate("/");
  }

  return (
    <div className="article">

        
      <button onClick={handleBack}>Back To the Puppy List</button>
    </div>
  );
}
