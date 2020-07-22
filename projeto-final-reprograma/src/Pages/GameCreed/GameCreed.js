import React from 'react';
import ReactPlayer from 'react-player' 
import './GameCreed.css'

const GameCreed = () => {
    return(
        <div>
            <div className='image-container-creed'>
                <img className='img-creed' src={require('../../Image/lib.jpg')}></img>
            </div>

            <div className='twitch-container-creed'>
            <ReactPlayer url='https://www.twitch.tv/videos/682548423' />
            </div>
       </div>
        
    )}

export default GameCreed;