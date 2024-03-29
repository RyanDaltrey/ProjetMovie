import React from "react";
import { Button, Form, Nav} from "react-bootstrap";


const NavBar = () => {


return (
<>

<Nav class="navbar navbar-expand-lg bg-body-tertiary m-5 px-3 rounded-pill col-11 ">
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
      <Form class="d-flex col-sm-10" role="search">
        <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search"></input>
        <Button class="btn btn-outline-success" type="submit">Search</Button>
      </Form>
    </div>
</Nav>

</>
);

};

export default NavBar;