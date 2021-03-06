import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {
  return (
    <div>
      <div className="image-container-horizon">
        <img className={`img-${props.data.id}`} src={`${process.env.PUBLIC_URL}/img/${props.data.imgBg}`} alt="Imagem de plano de fundo do jogo"/> 
        <img className={`logo-${props.data.id}`} src={`${process.env.PUBLIC_URL}/img/${props.data.imgLogo}`} alt="Logo do jogo"/>
      </div>  

      <div className="card">
          <div className="info-twitch">
            <img className={`perfil-${props.data.id}`} src={`${process.env.PUBLIC_URL}/img/${props.data.imgPerfil}`} alt="Foto Jogadora"></img>
            <h1 className="title-card">{props.data.name}</h1>
            <p className="text-card">{props.data.text}</p>

          <div className="redes-container">
            {props.data.socialMedia.twitch && (
              <div>
                <a href={props.data.socialMedia.twitch} target="_blank">
                  <img
                    className="redes-sociais"
                    src={require("../../Image/twitch.png")}
                    alt="Logo twitch"
                  ></img>
                </a>
              </div>
            )}

            {props.data.socialMedia.twitter && (
              <div>
                <a href={props.data.socialMedia.twitter} target="_blank">
                  <img
                    className="redes-sociais"
                    src={require("../../Image/twitter.png")}
                    alt="Logo twitter"
                  ></img>
                </a>
              </div>
            )}

            {props.data.socialMedia.instagram && (
              <div>
                <a href={props.data.socialMedia.instagram} target="_blank">
                  <img
                    className="redes-sociais"
                    src={require("../../Image/instagram.png")}
                    alt="Logo instagram"
                  ></img>
                </a>
              </div>
            )}
          </div>
         </div>  
        </div>
        <div className="twitch-container-horizon">
          <ReactPlayer url={props.data.video}/>
        </div>
      </div>
 
  );
}

export default VideoPlayer;
