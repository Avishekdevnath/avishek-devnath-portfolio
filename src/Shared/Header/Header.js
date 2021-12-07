import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="sticky-top p-3">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link className="nav-text " to='/'>
                            <h2 className="m-logo fw-bold" > Avishek </h2>
                        </Link>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-text mt-auto mb-auto" >
                            <Link className="nav-text ms-3 h5" to='/'>Home</Link>
                            <Link className="nav-text ms-3 h5" to='/projects'>Projects</Link>
                            <Link className="nav-text ms-3 h5" to='/blog'>Blog</Link>
                            <Link className="nav-text ms-3 h5" to='/about'>About Me</Link>
                            <Link className="nav-text ms-3 h5" to='/contact'>Contact Me</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;