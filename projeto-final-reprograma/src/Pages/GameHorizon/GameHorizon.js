import React from 'react';
import ReactPlayer from 'react-player' 
import './GameHorizon.css'

const GameHorizon = () => {
    return(
        <div>
            <div className='image-container'>
                <img className='img-horizon' src={require('../../Image/horizon1.jpeg')}></img>
                <img className='logo-horizon' src={require('../../Image/horizon-log.png')}></img>
            </div>

            <div className='twitch-container-horizon'>
            <ReactPlayer url='https://www.twitch.tv/videos/631931328' />
            </div>
       </div>
        
    )}

export default GameHorizon;