import { useParams } from 'react-router';

const GameDetails = () => {

  const { gameId } = useParams();
  console.log(gameId);
  return (
    <div className="game-details">
      <h2>Détail du jeu</h2>
      <p>Game ID: {gameId}</p>
    </div>
  );
}

export default GameDetails;