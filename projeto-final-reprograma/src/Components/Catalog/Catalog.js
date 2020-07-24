import React from 'react';
import './Catalog.css';
import {Link, BrowserRouter} from 'react-router-dom';

const Catalog = () =>{
    return(
    <section className="catalog-images">
       
        <h1 className="title-catalog">streaming de games</h1>
        
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
                    <img src={require('../../Image/apex.png')} alt="Capa Jogo Celeste"></img>
                    </a>
                </div>
                
                <div>
                    <a href="https://www.twitch.tv/fifateca66/clip/NaiveYawningSalsifyVoHiYo" target="_blank">
                    <img src={require('../../Image/ghost2.png')} alt="Capa Jogo Fifa 20"></img>
                   </a>
                </div>
                <div>
                     <a href="https://www.twitch.tv/saddummy/clip/HumbleConcernedMuleCoolCat" target="_blank">
                     <img src={require('../../Image/need.png')} alt="Capa Jogo Diablo 4"></img>
                     </a>
                </div>
                <div>
                    <a href="https://www.twitch.tv/aayley/clip/ThankfulTubularDragonfruitRuleFive" target="_blank">
                    <img src={require('../../Image/fortnite.png')} alt="Capa Jogo Left 4 Dead"></img>
                    </a>
                </div>
            </div>
               
            <h1 className="title-catalog2">teams</h1>

                <div className="catalog-images-line4">

                    <div className="cards-team">
                        <div className="img-queens">
                        <a href="https://www.twitch.tv/team/streamqueens" target="_blank">
                        <img src={require('../../Image/Ellipse 14.png')} alt="Capa da página da equipe de games"></img></a>
                        <div className="img-text-card">
                        <h3>Stream Queens</h3>
                        <p>Stream Queens is a community of Drag artists. Our mission is to unify the Drag queens, kings, characters, & creatures of Twitch!</p>
                        </div>
                    </div>

                    <div className="img-rainbow">
                        <a href="https://www.twitch.tv/team/rainbowarcade" target="_blank">
                        <img src={require('../../Image/rainbow.png')} alt="Capa da página da equipe de games"></img></a>
                        <div className="img-text-card">
                        <h3>Rainbow Arcade</h3>
                        <p>We are a community of LGBTQIA+ Twitch streamers dedicated to inclusivity in gaming and beyond.</p>
                        </div>
                    </div>
                    <div className="img-transvengers">
                        <a href="https://www.twitch.tv/transvengers" target="_blank">
                        <img src={require('../../Image/trans.png')} alt="Capa da página da equipe de games"></img></a>
                        <div className="img-text-card">
                        <h3>Transvengers</h3>
                        <p>Transvengers broadcasts Just Talk, The Sims 4 and Retro.</p>
                        </div>
                    </div>
                    <div className="img-bgg">
                        <a href="https://www.twitch.tv/blackgirlgamers/about" target="_blank">
                        <img src={require('../../Image/bgg.png')} alt="Capa da página da equipe de games"></img></a>
                        <div className="img-text-card">
                        <h3>Black Girl Gamers</h3>
                        <p>Your spot for all things Black Girl Gaming! Broadcasting streams from our members & game nights!</p>
                        </div>
                     </div>
                   </div>
                </div>
    </section>
    )
}

export default Catalog;