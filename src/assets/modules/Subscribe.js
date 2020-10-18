import React, { Component } from "react";
import DesignIt from "../images/design-it.png";

class Subscribe extends Component {
  render() {
    return (
      <div>
        <footer>
          <section>
            <i class="fal fa-long-arrow-up arrow-up"></i>
            <div className="subscribe">
              <p>
                Stay up to date on what we are doing and new learning
                opportunities
              </p>
              <div className="form">
                <form>
                  <input type="email" name="email" placeholder="Your email" />
                </form>
                <div className="horizontal"></div>
                <h6>View Privacy Policy</h6>
              </div>
              <button>SUBSCRIBE</button>
            </div>
          </section>
        </footer>
      </div>
    );
  }
}

export default Subscribe;
