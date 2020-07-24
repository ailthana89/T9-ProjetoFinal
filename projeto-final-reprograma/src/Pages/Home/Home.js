import React from 'react';
import Header from '../../Components/Header/Header'
import Section from '../../Components/Section/Section'
import Catalog from '../../Components/Catalog/Catalog'
import Footer from '../../Components/footer/footer'
import './Home.css'

const Home = () =>{
    return(
       <div>
           <Header />
           <Section />
           <Catalog />
           <Footer />
       </div>     
    )
}


export default Home;
