import React from 'react';
import ReactPlayer from 'react-player' 
import './GameLast.css'

const GameLast = () => {
    return(
        <div>
            <div className='image-container-last'>
                <img className='img-last' src={require('../../Image/last.png')}></img>
            </div>

            <div className='twitch-container-last'>
            <ReactPlayer url='https://www.twitch.tv/videos/678801520' />
            </div>
       </div>
        
    )}

export default GameLast;