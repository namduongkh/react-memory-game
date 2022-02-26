import './App.css';
import GameMatch from './components/GameMatch';
import { useState } from 'react';

function App() {
  const [gameId, setGameId] = useState(1);

  return (
    <div className="App">
      <GameMatch gameId={gameId} onNewGame={() => { setGameId(gameId + 1) }} />
    </div>
  );
}

export default App;
