import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function BrandExample() {
    return (
      <>

<Navbar className="footer_block">
        <Container>
          <Navbar.Brand href="#home" id="footer_content">
          <img src={require("../Assets/images/logo_hub_cinema.png")} alt="logo_hub_cinema" id="logo_hub_cinema_footer"/>
          <p>CopyRight©</p>
          <p>Mentions Légales</p>
          <p>hubcinema@orange.fr</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
      </>
    );
} export default BrandExample;
