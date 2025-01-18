import React from "react";

export default function NewPlayerForm() {
  function handleSubmit() {}

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label id="playerName">Name:</label>
          <input
            name="playerName"
            type="text"
            placeholder="New Puppy's Name"
            required
          />
          <label id="playerBreed">Puppy Breed:</label>
          <input
            name="playerBreed"
            type="text"
            placeholder="What breed is your puppy?"
          />
          <label> Picture: </label>
          <input type="text" name="imageUrl" placeholder="Image URL" />
          <button type="submit">Add Puppy</button> 
        </form>
      </div>
    </>
  );
}
