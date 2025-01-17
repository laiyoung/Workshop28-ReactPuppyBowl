export default function SinglePlayer({ player }) {
  
function handleDelete() {}

  return (
    <div className="player-card">
      <h1> {player.name}</h1>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
