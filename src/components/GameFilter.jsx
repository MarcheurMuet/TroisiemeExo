import React, { useState, useEffect } from 'react';
import Game from './Game';

const GameFilter = ({ onToggle }) => {
    const [games, setGames] = useState([]); 
    const [selectedGames, setSelectedGames] = useState([]); 

  
    useEffect(() => {
        fetch("http://localhost:5000/games")
            .then((response) => response.json())
            .then((data) => {
                setGames(data); 
                setSelectedGames(data); 
            })
            .catch((error) => console.error("Erreur lors de la récupération des jeux :", error));
    }, []);

    
    const updateFilter = (selectedDifficulty) => {
        if (selectedDifficulty === "all") {
            setSelectedGames(games); 
        } else {
            setSelectedGames(games.filter((game) => game.difficulty === selectedDifficulty));
        }
    };

    return (
        <>
            <div className="game-filter">
                <h1>Filtre de jeux</h1>
                <button onClick={() => updateFilter("all")}>All</button>
                <button onClick={() => updateFilter("Facile")}>Facile</button>
                <button onClick={() => updateFilter("Difficile")}>Difficile</button>
                <button onClick={() => updateFilter("Hardcore")}>Hardcore</button>
                <ul>
                    {selectedGames && selectedGames.length > 0 ? (
                        selectedGames.map((game) => (
                            <Game
                                key={game.id}
                                game={game}
                                statut={game.statut}
                                onToggle={onToggle}
                            />
                        ))
                    ) : (
                        <li>Aucun jeu disponible</li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default GameFilter;