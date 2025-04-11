import { useState } from "react";

const useGameActions = (initialGames) => {
  const [games, setGames] = useState(initialGames);

  // Basculer le statut d'un jeu (Fav ou non fav)
  const toggleGameStatus = (id) => {
    setGames((prevGames) =>
      prevGames.map((game) =>
        game.id === id
          ? { ...game, statut: game.statut === "Fav" ? "non fav" : "Fav" }
          : game
      )
    );
  };

  // Supprimer un jeu
  const deleteGame = (id) => {
    setGames((prevGames) => prevGames.filter((game) => game.id !== id));
  };

  return { games, toggleGameStatus, deleteGame };
};

export default useGameActions;