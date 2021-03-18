import s from "./Navigation.module.scss";
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavigationBS() {
  return (
    <>
      <Navbar className={s.navbar} variant="dark" expand="lg">
        <Navbar.Brand href="#home"><img src="img/logo.jpg" alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">SHOP</Nav.Link>
            <NavDropdown title="VIDEO" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Wrestling</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MMA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Kickboxing, Myay Thai</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Mixed wrestling</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="GIRLS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All girls</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">2010 - 2011</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">2012 - 2013</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="COMPETITIONS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All competitions</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">2015 - 2017</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">2013 - 2014</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">2012</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">2011</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Archive</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">CONTACT US</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </>
  )
}