import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import player from './components/Data/Data.js';
import Player from './components/Players/Player';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Player></Player>
      </header>
    </div>
  );
}

export default App;
