import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import '../styles/Nav.module.css';
import Link from 'next/link';


export default function Navbarb({ currentPage, pageChange }) {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" id="header" bg="dark">
                <Container fluid>
                    <Navbar.Brand id="heading" href="../../lettercutter">
                        Coffin & Daughters Lettercutter
                    </Navbar.Brand>
                    {/* <span id="phrase" className="navbar-text text-info italic">
                        Adopt a pet today!
                    </span> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto my-2 my-lg-0">
                            <Link className="nav-link" href='/'>
                                Home
                            </Link>
                            <Link className="nav-link" href="/about">
                                About
                            </Link>
                            <Link className="nav-link" href="/process">
                                Process
                            </Link>
                            <Link className="nav-link" href="/memorials">
                                Memorials
                            </Link>
                            <Link className="nav-link" href="/architectural">
                                Architectural
                            </Link>
                            <Link className="nav-link" href="/news">
                                News
                            </Link>
                            <Link className="nav-link" href="/contact">
                                Contact
                            </Link>
                            {/* <NavDropdown
                                variant="outline-success dark"
                                className=" dropdown-menu-dark"
                                title="Account"
                                id="navbarDropdown"
                            >
                                {Auth.loggedIn() ? (
                  <NavDropdown.Item className="space-left nav-link disabled">
                    {Auth.getProfile().data.username}
                  </NavDropdown.Item>
                ) : (
                  <Link className="space-left nav-link" href="/login">
                    Login
                  </Link>
                )}
                <NavDropdown.Divider />
                {Auth.loggedIn() ? (
                  <>
                    <Link className="space-left nav-link" href="/profile">
                      Profile
                    </Link>

                    <NavDropdown.Item
                      className="space-left nav-link"
                      onClick={() => Auth.logout()}
                    >
                      Logout
                    </NavDropdown.Item>
                  </>
                ) : (
                  <Link className="space-left nav-link" href="/signup">
                    Signup
                  </Link>
                )}
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

