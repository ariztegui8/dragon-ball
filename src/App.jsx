import Header from "./components/Header";
import imgBanner from './assets/img-banner.webp'
import logo2 from './assets/logo2.png'
import esfera from './assets/esfera.png'
import Cards from "./components/Cards";
import Slider from "./components/Slider";


function App() {

  return (
    <>
      <Header />
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
     

      <div>
        <Slider />
      </div>

    </>
  );
}

export default App;
