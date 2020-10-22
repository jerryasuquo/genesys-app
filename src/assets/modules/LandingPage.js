import React, { Component } from "react";
import "../styles/style.css";
import Nav from "./Nav";
import FooterNav from "./FooterNav";
import Celebrate from "../images/celebrate.png";
import youngMan from "../images/young-man.png";
import Workplace from "../images/workplace.png";
import Businesses from "../images/businesses.png";
import Ignite from "../images/ignite.png";
import codeVille from "../images/codeville.png";
import Pink from "../images/pink.png";
import bestTeam from "../images/best-team.png";
import LandingMobileImg1 from "../images/landing_mobile_1.png";
import LandingMobileImg2 from "../images/landing_mobile_2.png";
import LandingMobileImg3 from "../images/landing_mobile_3.png";
import LandingMobileImg4 from "../images/landing_mobile_4.png";
import LandingMobileImg8 from "../images/landing_mobile_8.png";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Nav />

        <main className="landing-page">
          <section className="jumbo">
            <div className="learn-more-box">
              <h2>
                Genesys provides opportunities for young Nigerian techies and
                opportunities to grow and innovate.
              </h2>
              <img src={LandingMobileImg1} className="landing-mobile-img" />
              <p>
                We understand that opportunities are scarce in these parts. We
                are either creating or exposing our people to these
                opportunities.
              </p>
            </div>
            <i class="fal fa-long-arrow-down arrow-down"></i>
            <div className="celebrate">
              <img src={Celebrate} />
            </div>
          </section>

          <section className="learn-more">
            <div className="learn-more-box">
              <div className="photo">
                <img src={LandingMobileImg2} className="landing-mobile-img-2" />
                <img src={youngMan} className="young-man" />
              </div>
              <div className="copy">
                <h2>Learnable</h2>
                <p>
                  Every year, young Nigerians are launching new careers in the
                  technology industry. Find out how Genesys is helping them do
                  it.
                </p>
                <h5>Learn more</h5>
              </div>
            </div>
          </section>

          <section className="agora">
            <div className="agora-box">
              <img src={LandingMobileImg3} className="landing-mobile-img-3" />
              <div className="copy">
                <h2>Agora</h2>
                <p>
                  We are reimagining the workplace and how people work. Find out
                  how our co-working spaces can help you enjoy the work that you
                  do.
                </p>
                <h5>Learn more</h5>
              </div>
              <div className="photo">
                <img src={Workplace} />
              </div>
            </div>
          </section>

          <section className="start-zone">
            <div className="start-zone-box">
              <img src={LandingMobileImg4} className="landing-mobile-img-4" />
              <div className="photo">
                <img src={Businesses} className="businesses" />
              </div>
              <div className="copy">
                <h2>StartZone</h2>
                <p>
                  The business environment is harsh for <br />
                  early-stage businesses. We can help you rise above it all.
                </p>
                <h5>Here's how</h5>
              </div>
            </div>
          </section>

          <section className="our-things">
            <div className="our-things-box">
              <div className="col-2-mobile">
                <h2>Other things we do</h2>
              </div>
              <div className="col-1">
                <div className="row-1">
                  <div className="col-1-1">
                    <img src={Ignite} />
                  </div>
                  <div className="col-1-2">
                    <p>Genesys Ignite</p>
                  </div>
                </div>
                <div className="row-2">
                  <div className="col-1-1">
                    <img src={codeVille} />
                    <h5>CodeVille</h5>
                  </div>
                  <div className="col-1-2">
                    <img src={Pink} />
                    <h5>Pink summer of code</h5>
                  </div>
                </div>
              </div>

              <div className="col-2">
                <h2>Other things we do</h2>
              </div>
            </div>
          </section>

          <section className="best-team">
            <div className="best-team-box">
              <img src={LandingMobileImg8} className="landing-mobile-img-8" />
              <div className="photo">
                <img src={bestTeam} />
              </div>
              <div className="copy">
                <h2>The best team in the world</h2>
                <p>
                  We work with the most amazing people our industry has to
                  offer. They are really passionate about making a difference
                </p>
                <h5>See team</h5>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <section className="landing-page-sub">
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
        <FooterNav />
      </div>
    );
  }
}

export default LandingPage;
