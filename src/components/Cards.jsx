import React from 'react'
import {Card, Button} from 'react-bootstrap'
import card1 from "../assets/goku.png";
import card2 from "../assets/vegeta.png";
import card3 from "../assets/gohan.png";
import card4 from "../assets/broly.png";


const Cards = () => {
  return (
    <>
        <div className='d-flex justify-content-evenly py-5 text-center'>
        <Card className='card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card1} />
            <Card.Body>
                <Card.Title>Goku</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button className='btn-card' variant="primary">Ver más</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card2} />
            <Card.Body>
                <Card.Title>Vegeta</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button className='btn-card' variant="primary">Ver más</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card3} />
            <Card.Body>
                <Card.Title>Gohan</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button className='btn-card' variant="primary">Ver más</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card4} />
            <Card.Body>
                <Card.Title>Broly</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button className='btn-card' variant="primary">Ver más</Button>
            </Card.Body>
        </Card>
        </div>
    </>
  )
}

export default Cards