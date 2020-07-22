import React from 'react';
import ReactPlayer from 'react-player' 
import './GameZelda.css'

const GameZelda = () => {
    return(
        <div>
            <div className='image-container-zelda'>
                <img className='img-last' src={require('../../Image/zelda.jpg')}></img>
                <img className='logo-zelda' src={require('../../Image/logo-zelda.png')}></img>
            </div>

            <div className='twitch-container-zelda'>
            <ReactPlayer url='https://www.twitch.tv/videos/663047246' />
            </div>
       </div>
        
    )}

export default GameZelda;