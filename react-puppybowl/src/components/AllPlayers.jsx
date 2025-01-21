import React from "react";
import SinglePlayer from "./SinglePlayer";
import { useEffect } from "react";

export default function AllPlayers({ players, getData }) {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="article">
      {players.map((player) => {
        return (
          <SinglePlayer key={player.id} player={player} getData={getData} />
        );
      })}
    </div>
  );
}
