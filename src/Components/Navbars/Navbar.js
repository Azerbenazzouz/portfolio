import React from 'react';
import './navbar.css'

import { Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <React.Fragment>
    <nav class="navbar  navbar-expand-lg navbar-dark fixed-top bg-white gradientnav ">
  <div class="container">
    <Link class="navbar-brand" to="/">Azer</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/projects">Projects</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/certificates">Certificates</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/about">About</Link>
        </li>
        </ul>
      <div class="d-flex">
        <Link to='/login' class="btn btn-success me-2" type="submit">Login</Link>
        <Link to='/regester' class="btn btn-success" type="submit">Regester</Link>
        </div>
    </div>
  </div>
</nav>
    </React.Fragment>
  );
}
