import React from "react";
import characters from "./data";

const App = () => {
  return (
    <div className="app">
      <h1 className="header">Attack on Titan Characters</h1>
      <ul className="characters-container">
        {characters.map((character) => {
          return (
            <li key={character.id} className="character-card">
              <img src={character.image_url} alt={character.name} />
              <div className="character-info">
                <h2>{character.name}</h2>
                <p>{`${character.age} Years`}</p>
                <p>{character.height}</p>
                <p>{character.weight}</p>
                <p>{character.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
