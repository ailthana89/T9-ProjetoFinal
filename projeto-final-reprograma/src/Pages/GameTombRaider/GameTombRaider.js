import React from 'react';
import ReactPlayer from 'react-player';
import './GameTombRaider.css';

const GameTombRaider = () => {
    return(
        <div>
            <div className='image-container'>
                <img className='img-tomb' src={require('../../Image/tomb.jpg')}></img>
            </div>

            <div className='twitch-container-tomb'>
                 <ReactPlayer url='https://www.twitch.tv/videos/682488544' />
            </div>

        </div>
    )
}

export default GameTombRaider;