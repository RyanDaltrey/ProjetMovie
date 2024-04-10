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
        <Navbar.Brand href="/home" id="titre_navbar">Hub Cinéma</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link id="text_navbar" href="/home">Accueil</Nav.Link>
            <Nav.Link  id="text_navbar" href="/films">Films</Nav.Link>
            <NavDropdown id="text_navbar" class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" href="/categories" title="Catégories" >
              <NavDropdown.Item href="">Action</NavDropdown.Item>
              <NavDropdown.Item href="">Aventure</NavDropdown.Item>
              <NavDropdown.Item href="">Anime</NavDropdown.Item>
              <NavDropdown.Item href="">Comédie</NavDropdown.Item>
              <NavDropdown.Item href="">Crime</NavDropdown.Item>
              <NavDropdown.Item href="">Documentaire</NavDropdown.Item>
              <NavDropdown.Item href="">Drama</NavDropdown.Item>
              <NavDropdown.Item href="">Famille</NavDropdown.Item>
              <NavDropdown.Item href="">Fantasie</NavDropdown.Item>
              <NavDropdown.Item href="">Histoire</NavDropdown.Item>
              <NavDropdown.Item href="">Horror</NavDropdown.Item>
              <NavDropdown.Item href="">Musical</NavDropdown.Item>
              <NavDropdown.Item href="">Mystere</NavDropdown.Item>
              <NavDropdown.Item href="">Romance</NavDropdown.Item>
              <NavDropdown.Item href="">Science Fiction</NavDropdown.Item>
              <NavDropdown.Item href="">Film TV</NavDropdown.Item>
              <NavDropdown.Item href="">Thiller</NavDropdown.Item>
              <NavDropdown.Item href="">Guerre</NavDropdown.Item>
              <NavDropdown.Item href="">Western</NavDropdown.Item>
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