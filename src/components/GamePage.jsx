import React, { useState, useEffect } from 'react';
import Game from '../components/Game';
import AddGameForm from '../components/AddGameForm';
import './visuel/GamePage.css';

import axios from 'axios';

const GamePage = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/games')
            .then((response) => {
             setGames(response.data);
                console.log("Jeux récupérés avec succès", response.data);
            })
            .catch((error) => {
                console.error('Error fetching games:', error);
            });
    }, []);

    const handleAddGame = (name, difficulty, statut) => {
        const newGame = { name, difficulty, statut };
        setGames([...games, newGame]);
        axios
            .post('http://localhost:5000/games', newGame)
            .then((response) => console.log("Jeu ajoutée avec succès",response.data))
            .catch((error) => console.error('Error adding game:', error));
            };

    const handleToggleGame = (id) => {
        const game = games.find((game) => game.id === id);
        const updatedGame = { ...game, statut: !game.statut };
        axios
            .put(`http://localhost:5000/games/${id}`, updatedGame)
            .then((response) => {
                setGames((prevGames) =>
                    prevGames.map((game) => (game.id === id ? response.data : game))
                );
            })
            .catch((error) => console.error('Error updating game:', error));
    }

    const handleDeleteGame = (gameId) => {
        axios
            .delete(`http://localhost:5000/games/${gameId}`)
            .then(() => {
                console.log("Jeu supprimée avec succès");
                setGames(games.filter((game) => game.id !== gameId));
            })
            .catch((error) => console.error('Error deleting game:', error));
    };

    return (
        <div className="game-page">
            <h1>Jeux</h1>
            <AddGameForm onAddGame={handleAddGame} />
            <div className="game-list">
                {games.map((game) => (
                    <Game
                        key={game.id}
                        game={game}
                        onToggle={() => handleToggleGame(game.id)}
                        onDelete={() => handleDeleteGame(game.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default GamePage;