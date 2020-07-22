import React from 'react';
import './Catalog.css';
import {Link, BrowserRouter} from 'react-router-dom';

const Catalog = () =>{
    return(
        <section className="catalog-images">
            <div className="catalog-images-line1">
                <div> 
                    <BrowserRouter>
                        <Link to='/GameHorizon' target="_blank"> 
                            <img src={require('../../Image/horizon.png')} alt="Capa Jogo Horizon Zero Down"></img>
                        </Link>
                    </BrowserRouter>
                </div>
                <div>
                    <Link to='/GameTombRaider' target="_blank">
                    <img src={require('../../Image/tomb.png')} alt="Capa Jogo Tomb Raider"></img>
                    </Link>
                </div>
                <div>
                    <Link to='/Gamelol' target="_blank">
                    <img src={require('../../Image/lol.png')} alt="Capa Jogo League of legends"></img>
                    </Link>
                </div>
                <div>
                    <Link to='/GameGow'target="_blank">
                    <img src={require('../../Image/gow.png')} alt="Capa Jogo God of War"></img>
                    </Link>
                </div>
            </div>

            <div className="catalog-images-line2">
                <div>
                    <Link to='/GameCreed'target="_blank">
                    <img src={require('../../Image/creed.png')} alt="Capa Jogo Assassins creed liberation"></img>
                    </Link>
                </div>
                <div>
                    <Link to='/GameLast'target="_blank">
                    <img src={require('../../Image/thelast.png')} alt="Capa Jogo the last of us part 2"></img>
                    </Link>
                </div>
                <div>
                    <Link to='/GameZelda'target="_blank">
                    <img src={require('../../Image/zelda.png')} alt="Capa Zelda"></img>
                    </Link>
                </div>
                <div >
                    <Link to='/GameDandara' target="_blank">
                    <img src={require('../../Image/dandara.png')} alt="Capa Jogo Dandara"></img>
                   </Link>
                </div>
            </div>

            <div className="catalog-images-line3">
               
                <div>
                    <a href="https://www.twitch.tv/videos/677987612" target="_blank">
                    <img src={require('../../Image/celeste.png')} alt="Capa Jogo Celeste"></img>
                    </a>
                </div>
                
                <div>
                    <a href="https://www.twitch.tv/fifateca66/clip/NaiveYawningSalsifyVoHiYo" target="_blank">
                    <img src={require('../../Image/fifa.png')} alt="Capa Jogo Fifa 20"></img>
                   </a>
                </div>
                <div>
                     <a href="https://www.twitch.tv/saddummy/clip/HumbleConcernedMuleCoolCat" target="_blank">
                     <img src={require('../../Image/diablo.png')} alt="Capa Jogo Diablo 4"></img>
                     </a>
                </div>
                <div>
                    <a href="https://www.twitch.tv/aayley/clip/ThankfulTubularDragonfruitRuleFive" target="_blank">
                    <img src={require('../../Image/leftdead.png')} alt="Capa Jogo Left 4 Dead"></img>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Catalog;