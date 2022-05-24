import React from 'react'
import imgBanner from '../assets/img-banner.webp'
import logo2 from '../assets/logo2.png'
import esfera from '../assets/esfera.png'
import Cards from "../components/Cards";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
        <div className="banner">
            <img src={imgBanner} alt="" />
            <div className="logo">
                <img src={logo2} alt="" />
            </div>
            <div className="esfera">
                <img src={esfera} alt="" />
            </div>
        </div>

    
        <Cards />
     
        <Slider />
    </>
  )
}

export default Home