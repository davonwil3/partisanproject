import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import {  NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';


function Navbarsec(props){


return(

    <Navbar  expand="lg" variant={props.type} className="color-nav">
    <Navbar.Brand href="#home">Partisan Debate</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        
      </Nav>
    
    </Navbar.Collapse>
  </Navbar>




)





}


export default Navbarsec;