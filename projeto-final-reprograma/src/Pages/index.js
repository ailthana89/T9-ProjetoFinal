import React from 'react';
import './style.css'

const Pages = () =>{
    return(
        <div className="main-container">
            <header>
                <img src={require('../Image/header.jpg')} className="img-header"></img>
                        
                <div className="text-main">
                    <h1 className="title">Run The World <strong className="title-color">(Girls)</strong></h1>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"></link>
                    <p className="text1">What we run?</p>
                    <p className="text2">We run the world</p>
                    <p className="text3">Who run the world?</p>
                    <p className="text4">Girls!</p>
                    <p className="text5">Boy don't even try to touch this</p>
                    <p className="text6">Welcome to your gaming community!</p>
                </div>
            </header>

        </div>
    )
}


export default Pages;
