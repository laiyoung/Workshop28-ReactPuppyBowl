import React from "react";
import SinglePlayer from "./SinglePlayer";
import { useEffect, useState } from "react";
import { getPlayers } from "../api";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getData() {
      const playerData = await getPlayers();
      setPlayers(playerData);
      console.log(playerData);
    }
    getData();
  }, []);

  return (
    <div className="article">
      {players.map((player) => {
        return (
          <SinglePlayer
            key={player.id}
            player={player}
          />
        );
      })}
    </div>
  );
}
