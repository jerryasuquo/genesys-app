import React, { Component } from "react";
import DesignIt from "../images/design-it.png";

class FooterNav extends Component {
  render() {
    return (
      <div>
        <footer>
          <section className="footer-bottom">
            <div className="col-1">
              <ul>
                <li>Build Software</li>
                <li>Design Different</li>
                <li>Apply Your Knowledge</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="col-2">
              <p>
                Our Local Campus center: Kilometer 7, Enugu/Port Harcourt,
                Expressway, Centenary City, Enugu. Nigeria
              </p>
              <h5>Get in touch</h5>
            </div>
            <div className="col-3">
              <img src={DesignIt} />
            </div>
            <div className="col-4">
              <p>
                Learnable is proud to be a collaborative effort of all the arms
                of our product team
              </p>
              <h5>Head to DevStudio</h5>
            </div>
          </section>
          <section className="social-link">
            <div className="social-links">
              <i class="fab fa-twitter"></i>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-linkedin-in"></i>
              <i class="fab fa-instagram"></i>
              <i class="fa fa-youtube"></i>
              <i class="fab fa-vimeo-v"></i>
            </div>
            <div className="copyright">
              <i class="fal fa-copyright"></i>
              <h6>Genesys 2020</h6>
              <h6>Privacy Statement</h6>
            </div>
          </section>
        </footer>
      </div>
    );
  }
}

export default FooterNav;
