import React from 'react';
import ReactPlayer from 'react-player' 
import './GameGow.css'

const GameGow = () => {
    return(
        <div>
            <div className='image-container-gow'>
                <img className='img-gow' src={require('../../Image/gow2.png')}></img>
                <img className='logo-gow' src={require('../../Image/gow-logo.png')}></img>
              </div>

            <div className='twitch-containe-gow'>
            <ReactPlayer url='https://www.twitch.tv/videos/661742113' />
            </div>
       </div>
        
    )}

export default GameGow;