import React from 'react';
import './Section.css';

const Section = () =>{
    return(
            <div> 
                 <div className="text-container">
                    <div className="text1">
                        <p>What we run?</p>
                        <p >We run the world</p>
                    </div>
                    <div className="text2">
                        <p>Who run the world?</p>
                        <p>Girls!</p>
                    </div>
                    <div className="text3">
                        <p>Welcome to your gaming community!</p>
                    </div>
                 </div>
                 <div>
                     <img className="gif" src={require("../../Image/horizon.gif")}></img>
                 </div>
             </div>
        
    )       
}
           
export default Section;  