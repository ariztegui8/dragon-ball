import React, { useState } from 'react'
import {Card, Button} from 'react-bootstrap'
import card1 from "../assets/goku.png";
import card2 from "../assets/vegeta.png";
import card3 from "../assets/gohan.png";
import card4 from "../assets/broly.png";


const Cards = () => {

    const [mostrarImg, setMostrarImg] = useState('')

    const mostrarFoto = ()=>{
        setMostrarImg('perro malvado')
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
                    
                        <Button
                            className='btn-card'
                            variant="primary"
                            onClick={mostrarFoto}
                        >Ver más</Button>
                    </Card.Body>
                </Card>

                <Card className='card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card2} />
                    <Card.Body>
                        <Card.Title>Vegeta</Card.Title>
                    
                        <Button
                            className='btn-card'
                            variant="primary"
                            onClick={mostrarFoto}
                        >Ver más</Button>
                    </Card.Body>
                </Card>

                <Card className='card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card3} />
                    <Card.Body>
                        <Card.Title>Gohan</Card.Title>
                    
                        <Button 
                            className='btn-card'
                            variant="primary"
                            onClick={mostrarFoto}
                        >Ver más</Button>
                    </Card.Body>
                </Card>

                <Card className='card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card4} />
                    <Card.Body>
                        <Card.Title>Broly</Card.Title>
                    
                        <Button 
                            className='btn-card' 
                            variant="primary"
                            onClick={mostrarFoto}
                        >Ver más</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>
  )
}

export default Cards