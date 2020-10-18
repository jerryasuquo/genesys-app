import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/style.css";

class LearnableNav extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="nav-bg">
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
            <section className="bottom-nav">
              <div className="secondary">
                <ul>
                  <li>
                    <NavLink to="/learnable">home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/thelearnablesoftwaredeveloper">
                      software developers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/thelearnableproductdesigner">
                      Product designers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/applyyourknowledge">apply</NavLink>
                  </li>
                  <li>
                    <NavLink to="/journal">journal</NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq">faq</NavLink>
                  </li>
                </ul>
              </div>
            </section>
            <br />
          </nav>
        </header>
      </div>
    );
  }
}

export default LearnableNav;
