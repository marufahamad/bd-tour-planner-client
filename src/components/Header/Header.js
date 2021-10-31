import React from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand className="text-warning"><strong>BD Tour Planner</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" as={Link} to="/home">{user.email ? <i className="fas fa-house-user"></i> : <i className="fas fa-home"></i>} Home</Nav.Link>
                            {
                                user?.email ? <Nav>
                                    <Nav.Link className="nav-link" as={Link} to="/myTours">My Tours</Nav.Link>
                                    <Nav.Link className="nav-link" as={Link} to="/allTours">All Tours</Nav.Link>
                                    <Nav.Link className="nav-link" as={Link} to="/addLocation">Add New Location</Nav.Link>
                                </Nav> : []
                            }
                        </Nav>
                        <Nav>
                            {user?.email ? <Nav.Link ><img className="rounded-pill" width="40px" height="40px" src={user.photoURL} alt="" />{user.displayName} <Button onClick={logOut} variant="light">Log Out <i className="fas fa-sign-out-alt"></i> </Button> </Nav.Link> :
                                <Nav>
                                    <Nav.Link as={Link} to="/login">Login <i className="fas fa-sign-in-alt"></i></Nav.Link>
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