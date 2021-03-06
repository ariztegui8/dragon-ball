import React from 'react'
import {Carousel} from 'react-bootstrap';
import card1 from "../assets/slider-figma.png";
import card2 from "../assets/slider2-figma.png";
import card4 from "../assets/slider4-figma.png";
import card3 from "../assets/slider3-figma.png";

const Slider = () => {
  return (
    <>
        <div className='title-slider'>
            <h1 className='mt-5 text-center'>Slider</h1>
        </div>
        <div className='container-slider'>
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={card1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={card2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={card4}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={card3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    </>
  )
}

export default Slider