import React from 'react';
import ReactPlayer from 'react-player' 
import './Gamelol.css'

const Gamelol = () =>{
    return(
        <div>
        <div className='image-container'>
          <img className='capa-lol' src={require('../../Image/lol-capa.jpg')}></img>  
        </div>

        <div className='twicth-container-lol'>
            <ReactPlayer url='https://www.twitch.tv/videos/631931328' />
        </div>
    
   </div>
    )
}

export default Gamelol;