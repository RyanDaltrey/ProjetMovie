import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <>

    <header id="header_hub_cinema">
  <img src={require("../Assets/logo_hub_cinema.png")} alt="logo_hub_cinema" id="logo_hub_cinema"/>
  </header>

    <Navbar expand="lg" className="bg-body-tertiary px-3 rounded-pill col-11" id="navbar_block">
      <Container fluid>
        <Navbar.Brand href="#" id="titre_navbar">Hub Cinéma</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Accueil</Nav.Link>
            <Nav.Link href="#action2">Films</Nav.Link>
            <NavDropdown title="Catégories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Aventure</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Anime</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Comédie</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Crime</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Documentaire</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Drama</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Famille</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Fantasie</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Histoire</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Musical</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Mystere</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Science Fiction</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Film TV</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Thiller</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Guerre</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Western</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" id="search_block">
            <Form.Control
              type="search"
              placeholder="Rechercher"
              className="me-2"
              aria-label="Search"
              id="input_search_bar"
            />
            <Button variant="outline-success" id="search_button">Rechercher</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavScrollExample;