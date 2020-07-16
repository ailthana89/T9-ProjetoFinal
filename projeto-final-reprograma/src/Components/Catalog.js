import React from 'react';
import './Catalog.css';


const Components = () =>{
    return(
        <section className="catalog-images">
            <div className="catalog-images-line1">
                <div> 
                  <a href="https://www.twitch.tv/blackgirlgamers/video/631931328" target="_blank"> 
                    <img src={require('../Image/horizon.png')} alt="Capa Jogo Horizon Zero Down"></img>
                  </a>
                </div>

                <div>
                    <a href="https://www.twitch.tv/saddummy/clip/FantasticIncredulousWallabyWholeWheat" target="_blank">
                     <img src={require('../Image/diablo.png')} alt="Capa Jogo Diablo 4"></img>
                    </a>
                </div>
                <div>
                   <a href="https://www.twitch.tv/baconbitsnow/clip/KitschyProudBasenjiOptimizePrime?filter=clips&range=30d" target="_blank">
                    <img src={require('../Image/dandara.png')} alt="Capa Jogo Dandara"></img>
                   </a>
                </div>
                <div>
                   <a href="https://www.twitch.tv/fifateca66/clip/NaiveYawningSalsifyVoHiYo" target="_blank">
                    <img src={require('../Image/fifa.png')} alt="Capa Jogo Fifa 20"></img>
                   </a>
                </div>
            </div>

            <div className="catalog-images-line2">
                <div>
                    <a href="https://www.twitch.tv/bronze_goddess/clip/SpeedyInterestingBeanPRChase" target="_blank">
                    <img src={require('../Image/creed.png')} alt="Capa Jogo Assassins creed liberation"></img>
                    </a>
                </div>
                <div>
                     <a href="https://www.twitch.tv/storymodebae/clip/CrispyFurtiveSamosaDoggo" target="_blank">
                    <img src={require('../Image/thelast.png')} alt="Capa Jogo the last of us part 2"></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.twitch.tv/videos/677987612" target="_blank">
                    <img src={require('../Image/celeste.png')} alt="Capa Jogo Celeste"></img>
                    </a>
                </div>
                <div >
                     <a href="https://www.twitch.tv/mrschimchim/clip/OptimisticHedonisticDogSoonerLater" target="_blank">
                    <img src={require('../Image/lol.png')} alt="Capa Jogo League of legends"></img>
                    </a>
                </div>
            </div>

            <div className="catalog-images-line3">
                <div>
                    <a href="https://www.twitch.tv/blackgirlgamers/clip/SillySmilingRabbitPhilosoraptor?filter=clips&range=30d&sort=timetps://www.twitch.tv/mrschimchim/clip/OptimisticHedonisticDogSoonerLater" target="_blank">
                    <img src={require('../Image/zelda.png')} alt="Capa Zelda"></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.twitch.tv/pqueen/clip/EnjoyableGrotesquePassionfruitGingerPower" target="_blank">
                    <img src={require('../Image/gow.png')} alt="Capa Jogo God of War"></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.twitch.tv/phlog/clip/AbstruseMotionlessSpindlePRChase" target="_blank">
                    <img src={require('../Image/tomb.png')} alt="Capa Jogo Tomb Raider"></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.twitch.tv/aayley/clip/ThankfulTubularDragonfruitRuleFive
                    " target="_blank">
                    <img src={require('../Image/leftdead.png')} alt="Capa Jogo Left 4 Dead"></img>
                    </a>
                </div>
               
            </div>
            
        </section>
    )
}

export default Components;