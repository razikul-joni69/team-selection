import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import player from '../Data/Data';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Player.css';


const Player = () => {
  const [newplayer, setNewPlayer] = useState([]);
  const addPlayer = (player) =>{
      const newPlayer = [...newplayer, player]
      setNewPlayer(newPlayer);
  }
    return (
        <div className="players-container">
            <div className="all-players">
                {player.map(player => <SinglePlayer 
                    addPlayer={addPlayer}
                    players={player}
                    ></SinglePlayer>)}
            </div>

            <div className="selected-players">
                <Cart cart={newplayer}></Cart>
            </div>
        </div>
    );
};

export default Player;