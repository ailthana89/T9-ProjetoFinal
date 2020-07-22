import React from 'react';
import ReactPlayer from 'react-player' 
import './GameHorizon.css'

const GameHorizon = () => {
    return(
        <div>
            <div className='image-container-horizon'>
                <img className='img-horizon' src={require('../../Image/dawn.jpg')}></img>
                <img className='logo-horizon' src={require('../../Image/horizon-log.png')}></img>
            </div>

            <div className='card' >
                <div className='info-twitch'>
                <div>
                    <img className='img-card' src={require('../../Image/klb.jpeg')} alt="Logo twitch"></img>
                </div>
                <h1 className='title-card'>KLB_Media</h1>
                <p className='text-card'>Welcome To The Mango Nation! I'm a variety streamer from Canada. I'm always playing Overwatch, but also love trying out new games. I am currently playing Dead By Daylight, The Walking Dead and GTAV to name a few.</p>
                <div className='redes-container'>
                <div>
                    <a href="https://www.twitch.tv/klb_media/about" target="_blank">
                    <img className='redes-sociais' src={require('../../Image/twitch.png')} alt="Logo twitch"></img>
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/klbmedia?lang=en" target="_blank">
                    <img className='redes-sociais' src={require('../../Image/instagram.png')} alt="Logo twitch"></img>
                    </a>
                    
                </div>
                <div>
                    <a href="https://twitter.com/klbmedia?lang=en" target="_blank">
                    <img className='redes-sociais' src={require('../../Image/twitter.png')} alt="Logo twitch"></img>
                    </a>
                </div>
                </div>
            </div>

            <div className='twitch-container-horizon'>
            <ReactPlayer url='https://www.twitch.tv/videos/631931328' />
            </div>
          </div> 
       </div>
        
    )}

export default GameHorizon;