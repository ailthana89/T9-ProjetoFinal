import React from 'react';
import './style.css'

const Components = () =>{
    return(
        <section className="catalog-images">
            <div className="catalog-images-line1">
                <div>
                    <img link="https://www.playstation.com/pt-br/games/horizon-zero-dawn-ps4/" src={require('../Image/horizon.png')} alt="Capa Jogo Horizon Zero Down"></img>
                </div>
                <div>
                    <img src={require('../Image/diablo.png')} alt="Capa Jogo Diablo 4"></img>
                </div>
                <div>
                    <img src={require('../Image/dandara.png')} alt="Capa Jogo Dandara"></img>
                </div>
                <div >
                    <img src={require('../Image/fifa.png')} alt="Capa Jogo Fifa 20"></img>
                </div>
            </div>

            <div className="catalog-images-line2">
                <div>
                    <img src={require('../Image/creed.png')} alt="Capa Jogo Assassins creed liberation"></img>
                </div>
                <div>
                    <img src={require('../Image/thelast.png')} alt="Capa Jogo the last of us part 2"></img>
                </div>
                <div>
                    <img src={require('../Image/celeste.png')} alt="Capa Jogo Celeste"></img>
                </div>
                <div >
                    <img src={require('../Image/lol.png')} alt="Capa Jogo League of legends"></img>
                </div>
            </div>

            <div className="catalog-images-line3">
                <div>
                    <img src={require('../Image/zelda.png')} alt="Capa Zelda"></img>
                </div>
                <div>
                    <img src={require('../Image/gow.png')} alt="Capa Jogo God of War"></img>
                </div>
                <div>
                    <img src={require('../Image/tomb.png')} alt="Capa Jogo Tomb Raider"></img>
                </div>
                <div >
                    <img src={require('../Image/leftdead.png')} alt="Capa Jogo Left 4 Dead"></img>
                </div>
            </div>



















        </section>
    )
}

export default Components;