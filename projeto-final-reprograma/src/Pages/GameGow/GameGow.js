import React from 'react';
import ReactPlayer from 'react-player' 
import './GameGow.css'

const GameGow = () => {
    return(
        <div>
            <div className='image-container'>
                <img className='img-gow' src={require('../../Image/gow.jpg')}></img>
              </div>

            <div className='twitch-containe-gow'>
            <ReactPlayer url='https://www.twitch.tv/videos/631931328' />
            </div>
       </div>
        
    )}

export default GameGow;