import React, { useState } from 'react';
import player from '../Data/Data';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Player.css'


const Player = () => {
  const [players, setPlayers] = useState([player])
  const playerContainer={
      
  }

    return (
        <div className="players-container">
            <div className="all-players">
 
                {player.map(player => <SinglePlayer players={player}></SinglePlayer>)}

            </div>

            <div className="selected-players">
                <h3>Selected players</h3>
            </div>
        </div>
    );
};

export default Player;