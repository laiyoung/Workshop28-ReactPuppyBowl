import React from "react";
import { deletePlayer } from "../api";

export default function SinglePlayer({ player }) {
  async function handleDelete() {
    await deletePlayer(player.id);
    location.reload();
  }

  return (
    <div className="player-card">
      <h3>{player.name}</h3>
      <img src={player.imageUrl} alt={player.name} />
      <button>Player Details</button>
      <p>Player ID: {player.id} </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
