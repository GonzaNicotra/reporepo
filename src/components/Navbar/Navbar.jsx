import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoBuNiMa from '../../assets/logoBunima.webp';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


function BasicNav() {
  
  return (
    <Navbar sticky="top" variant='dark' expand="lg" className='nav'>
        <NavLink to={'/'}>
          <Navbar.Brand>
            <img src={LogoBuNiMa} className="imagen" alt="BuNiMa logo"/>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            <NavLink to={'/contacto'} className='detail'>
              <Nav.Link active href="#link">About</Nav.Link>
            </NavLink>
            <NavLink to={'/contacto'} className='detail'>
              <Nav.Link active href="#link">Book</Nav.Link>
            </NavLink>
            <NavLink to={'/contacto'} className='detail'>
              <Nav.Link active href="#link">Contacto</Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicNav;