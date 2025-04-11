import React, { useState, useEffect } from "react";
import "./visuel/GameSearch.css";

function GameSearch() {
  const [games, setGames] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/games")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Erreur lors de la récupération des jeux :", error));
  }, []);

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(inputText.toLowerCase())
  );

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="game-search">
      <h1 className="title">GameSearch</h1>
      <p className="subtitle">Rechercher un jeu</p>
      <div className="search-bar">
        <input
          type="text"
          placeholder="exemple: Conker"
          onChange={inputHandler}
          className="search-input"
        />
      </div>
      <ul className="game-list">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <li key={game.id} className="game-item">
              <img src={game.image} alt={game.name} className="game-image" />
              <div className="game-info">
                <h2>{game.name}</h2>
                <p>{game.difficulty}</p>
                {game.statut ? <span className="fav">⭐ Favori</span> : ""}
              </div>
            </li>
          ))
        ) : (
          <li className="no-game">Aucun jeu trouvé</li>
        )}
      </ul>
    </div>
  );
}

export default GameSearch;