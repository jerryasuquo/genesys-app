import React, { Component } from "react";
import Subscribe from "./Subscribe";
import FooterNav from "./FooterNav";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <Subscribe />
          <FooterNav />
        </footer>
      </div>
    );
  }
}

export default Footer;
