import React from 'react';
import ReactPlayer from 'react-player' 
import './Gamelol.css'

const Gamelol = () =>{
    return(
        <div>
        <div className='image-container-lol'>
          <img className='capa-lol' src={require('../../Image/lol-capa.jpg')}></img>  
          <img className='logo-lol' src={require('../../Image/League_of_Legends_logo.png')}></img>  
        </div>

        <div className='twicth-container-lol'>
            <ReactPlayer url='https://www.twitch.tv/videos/686315378' />
        </div>
    
   </div>
    )
}

export default Gamelol;