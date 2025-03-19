import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav } from 'react-bootstrap'
const Navbarss = () => {
  return (
    <>
     <Navbar style={{ backgroundColor: "rgb(71,104,120)" }}  expand="lg">
         <Navbar.Brand as={Link} to="/"  className="fw-bold">Django+DRF CRUD Operation</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="fw-semibold">Upload Details</Nav.Link>
            <Nav.Link as={Link} to="/get" className="fw-semibold">View</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Navbarss