import React from "react";
import { Link } from "react-router-dom";

import logo from '../CINEMOUNT.png';

const Navbar = () => {
  return (
      <nav>
                 
                  <Link  to="/"> <img src={logo} className="App-logo" alt="logo" /></Link>
        <ul>
          <li>
            <Link  to="/about">About</Link>
          </li>
          <li>
            <Link   to="/movielist/">MovieList</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
