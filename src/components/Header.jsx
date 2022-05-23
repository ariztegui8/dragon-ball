import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logoMenu from "../assets/logo-menu.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className='d-flex justify-content-between container-header'>
      <div className='container-logo'>
        <Navbar.Brand href="#home"><img src={logoMenu} className='logo-menu' alt="" /></Navbar.Brand>
      </div>
      <div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto container-links">
            <Nav.Link href="#menu" className='text-white fs-5 link1'>Menu</Nav.Link>
            <Nav.Link href="#blog" className='text-white fs-5 link2'>Blog</Nav.Link>
            <Nav.Link href="#contacto" className='text-white fs-5 link3'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Header