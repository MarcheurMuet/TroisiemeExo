import React, { useState, useEffect } from "react";
import "./visuel/Favorites.css";

const Favorites = () => {
  const [games, setGames] = useState([]);
  const [favoriteGames, setFavoriteGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        const favorites = data.filter((game) => game.statut === "true");
        setFavoriteGames(favorites);
      })
      .catch((error) => console.error("Erreur lors de la récupération des jeux :", error));
  }, []);

  return (
    <div className="favorites-page">
      <h1 className="title">Jeux Favoris</h1>
      {favoriteGames.length > 0 ? (
        <ul className="game-list">
          {favoriteGames.map((game) => (
            <li key={game.id} className="favorite-item">
              <img src={game.image} alt={game.name} className="game-image" />
              <div className="game-info">
                <h2>{game.name}</h2>
                <p>{game.difficulty}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-favorites">Aucun jeu favori trouvé.</p>
      )}
    </div>
  );
};

export default Favorites;