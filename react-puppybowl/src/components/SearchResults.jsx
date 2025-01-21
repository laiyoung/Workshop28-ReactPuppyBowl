import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchResults({ results }) {
//   console.log(results);

  const navigate = useNavigate();


  async function handleBack() {
    navigate("/");
  }

  return (
    <div className="article">
        {results.map((puppy) => {
          return (
            <div  key={puppy.id} className="player-card">
              <h3>{puppy.name}</h3>
              <img src={puppy.imageUrl} alt={puppy.name} />
              <p>Player ID: {puppy.id} </p>
              <p>Breed: {puppy.breed} </p>
              <p>Status: {puppy.status} </p>
            </div>
          );
        })}

      <button onClick={handleBack}>Back To the Puppy List</button>
    </div>
  );
}
