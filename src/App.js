import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Player from './components/Players/Player';
function App() {
  const [players, setPlayers] = useState([])
  useEffect(()=>{
    setPlayers(<Player></Player>);
    console.log('object');
  },[])

  return (
    <div className="App">
        <Header></Header>
        {
          players
        }
    </div>
  );
}

export default App;
