import './visuel/Game.css';

const Game = ({ game, onDelete }) => {
    return (
        <div className="game-item">
            <img src={game.image} alt={game.name} className="game-image" />
            <li className={game.statut ? "fav" : "non-fav"}>
                {game.name}
                {game.difficulty === "Facile" && <span className="facile">Facile</span>}
                {game.difficulty === "Difficile" && <span className="difficile">Difficile</span>}
                {game.difficulty === "Hardcore" && <span className="hardcore">Hardcore</span>}
                {game.statut && <span className="fav">⭐</span>}
            </li>
            <button className="delete-button" onClick={() => onDelete(game.id)}>
                Delete
            </button>
        </div>
    );
};

export default Game;