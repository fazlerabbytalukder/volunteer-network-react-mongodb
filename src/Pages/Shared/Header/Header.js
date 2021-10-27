import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logos/Group 1329.png';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='navber'>
            <Navbar collapseOnSelect expand="lg" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            alt=""
                            src={logo}
                            width="100"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/home" className='fw-bold text-dark'>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/donation" className='fw-bold text-dark'>
                                Donation
                            </Nav.Link>
                            <Nav.Link as={Link} to={`/myEvents/${user.email}`} className='fw-bold text-dark'>
                                Events
                            </Nav.Link>
                            <Nav.Link as={Link} to="/blog" className='fw-bold text-dark'>
                                Blog
                            </Nav.Link>
                            <Nav.Link as={Link} to="/admin" className="btn btn-dark rounded text-light px-4">
                                Admin
                            </Nav.Link>
                            {
                                user?.email ? <><Nav.Link as={Link} to="/home" onClick={logOut} className="btn btn-light rounded px-4 border me-2 ms-2">
                                    Logout
                                </Nav.Link>
                                <Nav.Link as={Link} to="/home" className="btn btn-light rounded px-4 border me-2 ms-2">
                                    {user?.displayName}
                                    </Nav.Link>
                                </>
                                    :
                                    <>
                                    <Nav.Link as={Link} to="/login" className="btn btn-light rounded px-4 border me-2 ms-2">
                                        Login
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/register" className="btn btn-primary rounded text-light px-4">
                                        Sign up
                                    </Nav.Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;