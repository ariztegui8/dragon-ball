import React, { useState } from 'react'
import {Card} from 'react-bootstrap'
import card1 from "../assets/goku.png";
import card2 from "../assets/vegeta.png";
import card3 from "../assets/gohan.png";
import card4 from "../assets/broly.png";
import Blog from './Blog';


const Cards = () => {

    const [cards, setCards] = useState(false);

    const verImagen = ()=>{
        setCards(true);
    }

  return (
    <>
        <div className='title-card'>
            <h1 className="mt-5 text-center">Cards</h1>
        </div>
        <div className='card-container'>
            <div className='d-flex justify-content-evenly py-5 text-center'>
                <Card className='card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card1} />
                    <Card.Body>
                        <Card.Title>Goku</Card.Title>
                        <button
                            onClick={verImagen}
                        >Ver Imagen</button>

                        {cards && <img src={card1}/>}
                    </Card.Body>
                </Card>

                <Card className='card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card2} />
                    <Card.Body>
                        <Card.Title>Vegeta</Card.Title>
                        <a className='btn btn-secondary btn-card' href={card2}>Ver más</a>
                    </Card.Body>
                </Card>

                <Card className='card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card3} />
                    <Card.Body>
                        <Card.Title>Gohan</Card.Title>
                        <a className='btn btn-secondary btn-card' href={card3}>Ver más</a>
                    </Card.Body>
                </Card>

                <Card className='card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card4} />
                    <Card.Body>
                        <Card.Title>Broly</Card.Title>
                        <a className='btn btn-secondary btn-card' href={card4}>Ver más</a>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>
  )
}

export default Cards