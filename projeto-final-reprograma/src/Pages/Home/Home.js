import React from 'react';
import './Home.css'

const Home = () =>{
    return(
        <div className="main-container">
                <header className="text-main">
                    <img src={require('../../Image/header.jpg')} className="img-header"></img>
                    <h1 className="title">Run The World <strong className="title-color">(Girls)</strong></h1>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"/>
                </header>             
         </div>       
    )
}


export default Home;
