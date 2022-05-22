import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import logoMenu from "../assets/logo-menu.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img src={logoMenu} className='logo-menu' alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Menu</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header