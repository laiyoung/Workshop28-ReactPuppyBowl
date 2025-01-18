export default function SinglePlayer({ player }) {
  function handleDelete() {}

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
