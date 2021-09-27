import React,{useState} from 'react';
import './navbar.css'

import { Link} from 'react-router-dom';
import { auth } from '../../firebase';
export default function Navbar_auth() {
  const [urlerr,seturlerr]=useState(true)
  const urlDefult="https://bootdey.com/img/Content/avatar/avatar7.png"
  const dburl =auth.currentUser.photoURL===null?urlDefult:auth.currentUser.photoURL
    const Signout=()=>{
      auth.signOut()
          .then(function () {
              console.log('signout')
          }).catch(function (error) {
              console.log(error.message)
          });
    }
    const [email,setemail] =useState(auth.currentUser.email)
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
          <Link class="nav-link active" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/profile">Profile</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/about">About</Link>
        </li>
        </ul>
        <div class="dropdown text-end ">
            <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img onError={()=>seturlerr(false)} src={urlerr ? dburl:urlDefult} alt="mdo" width="32" height="32" class="rounded-circle"/>
            </a>
            <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                <li><Link class="dropdown-item" to='/profile'>{email}</Link></li>
                <li><button class="dropdown-item" onClick={Signout}>Sign out</button></li>
            </ul>
      </div>
    </div>
  </div>
</nav>
    </React.Fragment>
  );
}
