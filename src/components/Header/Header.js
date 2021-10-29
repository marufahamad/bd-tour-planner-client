import React from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand>BD Tour Planner</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            {
                                user?.email ? <Nav>
                                    <Nav.Link as={Link} to="/myTours">My Tours</Nav.Link>
                                    <Nav.Link as={Link} to="/allTours">All Tours</Nav.Link>
                                    <Nav.Link as={Link} to="/addLocation">Add New Location</Nav.Link>
                                </Nav> : []
                            }
                        </Nav>
                        <Nav>
                            {user?.email ? <Nav.Link ><img className="rounded-pill" width="40px" height="40px" src={user.photoURL} alt="" />{user.displayName} <Button onClick={logOut} variant="light">Log Out </Button> </Nav.Link> :
                                <Nav>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                </Nav>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;