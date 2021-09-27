import React,{useState} from 'react';

import {BrowserRouter as Router , Route , Switch } from "react-router-dom";

import { auth } from './firebase';

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbars/Navbar';
import Navbar_auth from './Components/Navbars/Navbar-auth';
import NotFound from './Components/NotFound/NotFound';
import Profile from './Components/Profile/Profile';
import Projects from './Components/Projects/Projects';
import Regester from './Components/Regester/Regester';
import Certificates from './Components/my-certificate/certificate';


export default function App() {
    const [isLoggedIn,setisLoggedIn]=useState(false)
    auth.onAuthStateChanged(function (user) {
      if (user) {
          setisLoggedIn(true)
      } else {
          setisLoggedIn(false)
      }
  });
  return (
    <React.Fragment>
          <Router>
          {isLoggedIn ? <Navbar_auth/> : <Navbar/>}
            <div className='pe-0 ps-0 center pt-5 mt-3'>
              <Switch>
                {!isLoggedIn ? <Route path="/profile"><Home/></Route> : <Route path="/profile"><Profile/></Route>}
                {!isLoggedIn ? <Route path="/contact"><Home/></Route> : <Route path="/contact"><Contact/></Route>}
                {isLoggedIn ? <Route path="/regester"><Home/></Route>:<Route path="/regester"><Regester/></Route>}
                {isLoggedIn ? <Route path="/login"><Home/></Route>:<Route path="/login"><Login/></Route>}
                <Route path="/about"><About/></Route>
                <Route path="/certificates"><Certificates/></Route>
                <Route path="/projects"><Projects/></Route>
                <Route path="/home"><Home/></Route>
                <Route path="/" exact><Home/></Route>
                <Route exact component={NotFound}/>
              </Switch>
            </div>
            <Footer/>
          </Router>
      
      
    </React.Fragment>
  );
}
  