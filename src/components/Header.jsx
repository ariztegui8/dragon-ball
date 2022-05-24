import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom';
import logoMenu from "../assets/logo-menu.png";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='d-flex justify-content-between container-header'>
        <div className='container-logo'>
          <Navbar.Brand as={Link} to="/" ><img src={logoMenu} className='logo-menu' alt="" /></Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto container-links">
                <Nav.Link as={Link} to="/" className='text-white fs-5 link1'>Home</Nav.Link>
                <Nav.Link as={Link} to="/blog" className='text-white fs-5 link2'>Blog</Nav.Link>
                <Nav.Link as={Link} to="/about" className='text-white fs-5 link2'>About</Nav.Link>
                <Nav.Link as={Link} to="/contact" className='text-white fs-5 link3'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>

    <Outlet>
      
    </Outlet>
    </>
  )
}

export default Header