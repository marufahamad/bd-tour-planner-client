import React from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand>Aneesa Tour Planner</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/biographies">Biographies</Nav.Link>
                        </Nav>
                        <Nav>
                            {/* {user?.email ? <Nav.Link ><img className="rounded-pill" width="40px" height="40px" src={user.photoURL} alt="" />{user.displayName} <Button onClick={logOut} variant="info">Log Out </Button> </Nav.Link> :
                                <Nav> */}
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            {/* </Nav>
                            } */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;