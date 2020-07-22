import React from 'react';
import ReactPlayer from 'react-player' 
import './GameDandara.css'

const GameDandara = () => {
    return(
        <div>
            <div className='image-container-dandara'>
                <img className='img-dandara' src={require('../../Image/dandara.jpg')}></img>
            </div>

            <div className='twitch-container-dandara'>
            <ReactPlayer url='https://www.twitch.tv/videos/665092155' />
            </div>
       </div>
        
    )}

export default GameDandara;