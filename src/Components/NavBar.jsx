import React from "react";
import { Button, Form, Nav} from "react-bootstrap";


const NavBar = () => {


return (
<>
<header id="header_hub_cinema">
  <img src={require("../Assets/logo_hub_cinema.png")} alt="logo_hub_cinema" id="logo_hub_cinema"/>
  </header>

<Nav class="navbar navbar-expand-lg bg-body-tertiary px-3 rounded-pill col-11 " id="navbar_block">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/films">Films</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <Form id="search_block" role="search">
        <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search" id="input_search_bar"></input>
        <Button class="btn" type="submit" id="search_button">Search</Button>
      </Form>
    </div>
</Nav>

</>
);

};

export default NavBar;