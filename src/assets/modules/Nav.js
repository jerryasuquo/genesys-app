import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/style.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="nav">
            <section className="top-nav">
              <div className="genesys-logo">
                <NavLink to="/">
                  <img src={logo} />
                </NavLink>
              </div>
              <div className="primary">
                <ul>
                  <li>
                    <NavLink to="/learnable">Learnable</NavLink>
                  </li>
                  <li>Agora</li>
                  <li>StartZone</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="devstudio">
                <span>build a product with</span>
                <button>DEVSTUDIO</button>
              </div>
            </section>
            <br />
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
