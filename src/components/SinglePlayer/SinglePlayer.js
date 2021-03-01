import React from 'react';
import './SinglePlayer.css';

import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SinglePlayer = (props) => {
    const {img, name, stats, salary} = props.players;
    console.log(props);
    return (
        <div className="main-container">
            <div className="player-container">
            <div className="player-img">
                <img src={img} alt="" srcset=""/>
            </div>
            <div className="player-details">
                <h2>{name}</h2>
                <h4>{stats}</h4>
                <h4>Salary : {salary}</h4>
                <button className="btn btn-success"> <FontAwesomeIcon icon={faUserPlus} /> Select Player</button>
            </div>
        </div>
        </div>
    );
};

export default SinglePlayer;