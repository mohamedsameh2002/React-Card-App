import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function AppNavbar() {
    const cartState = useSelector((state) => state.cart)
    return (
        <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to={"/"} className='navbar-brand'>CartApp</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={"/"} className='nav-link'>Products</Link>
                        <Link to={"cart"} className='nav-link'>Cart [{cartState.length}]</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


