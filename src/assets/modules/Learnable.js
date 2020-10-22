import React, { Component } from "react";
import HappyGuy1 from "../images/happy-guy 1.png";
import Social from "../images/social.png";
import Family from "../images/family.png";
import Culture from "../images/culture.png";
import Learning from "../images/learning.png";
import Learner from "../images/learner-expert.png";
import Activities from "../images/activities.png";
import Team from "../images/team.png";
import Video from "../images/Video.png";
import Image23 from "../images/image 23.png";
import Image24 from "../images/image 24.png";
import Image25 from "../images/image 25.png";
import Image26 from "../images/image 26.png";
import Mention from "../images/mentioned-in.png";
import LearnableNav from "./LearnableNav";
import Footer from "./Footer";

class Learnable extends Component {
  render() {
    return (
      <div>
        <LearnableNav />
        <main>
          <section className="notification">
            <div className="content">
              <div className="left-content">
                <h2>Coming soon: Learnable ‘20</h2>
                <p>
                  We've started taking in applications for the next batch of
                  learnable interns. Applications are on till the 21st of
                  Febuary
                </p>
              </div>
              <div className="right-content">
                <p>Click link to download...</p>
                <h2>Learnable ‘20 Brochure</h2>
              </div>
            </div>
          </section>

          <section className="hero-box">
            <div className="hero">
              <div className="hero-text">
                <h1>Everything is Learnable</h1>
                <p>
                  Learnable is the perfect product development internship
                  program brought to you by Genesys.
                </p>
              </div>
            </div>
            <section className="media-section">
              <div className="statistics">
                <div className="col-1">
                  <h3>305</h3>
                  <p>Young Software Developers Trained</p>
                </div>
                <div className="col-2">
                  <h3>2100</h3>
                  <p>Tech Enthusiasts</p>
                </div>
                <div className="col-3">
                  <h3>8</h3>
                  <p>StartUps Incubated</p>
                </div>
                <div className="col-4">
                  <h3>250</h3>
                  <p>Small Businesses supported</p>
                </div>
              </div>
            </section>
          </section>

          <i class="fal fa-long-arrow-down long-arrow-down"></i>

          <section className="hero-media">
            <div className="video">
              <img src={Video} />
            </div>
            <div className="explore-options">
              <div className="left-explore-option">
                <h2>Development</h2>
                <i class="fas fa-chevron-right"></i>
                <p>What to expect</p>
              </div>
              <div className="right-explore-option">
                <h2>Product Design</h2>
                <i class="fas fa-chevron-right"></i>
                <p>What to expect</p>
              </div>
            </div>
          </section>

          <section className="great-people">
            <div className="copy">
              <h2>We Make People Great</h2>
              <p>
                As part of our calculated efforts to contribute to the emerging
                knowledge and skills driven economy of Nigeria, Learnable is a
                <br />
                6-month product development training program with an emphasis on
                software programming and product design. It is for outstanding
                young individuals who are passionate about building a career in
                the software industry. <br />
                <br />
                We primarily educate and groom software developers and
                designers, preparing them for the industry.
              </p>
            </div>
            <div className="photo">
              <img src={HappyGuy1} />
            </div>
          </section>

          <section className="learning-experience">
            <div className="learning-experience-div">
              <div className="photo">
                <img src={Social} />
              </div>
              <div className="copy">
                <h2>An Unusual Learning Experience</h2>
                <p>
                  At Genesys, we believe in the learning processes as much as we
                  believe in the results. By applying a combination of active
                  and social learning methodologies, we create an environment
                  that involves the learner in the learning process while
                  providing avenues for collaboration and peer-to-peer
                  mentorship. <br />
                  <br />
                  Our methods over the years have helped us discover ways to
                  take education out of the classroom. We introduce our interns
                  to learning by experimentation and problem-solving. To us,
                  every task is an opportunity to learn.
                </p>
              </div>
            </div>
          </section>

          <section className="build-software">
            <div className="col-1">
              <h6>For Developers</h6>
              <h2>Learn to Build Software the Right Way</h2>
              <p>
                We love to build stuff. Really awesome stuff. That’s why we have
                developed a learning program that will empower you to create
                amazing software the right way.
                <br />
                <br /> We believe in learning through experimentation. Our aim
                is to nurture and grow bright young minds from the get-go
                because that’s how our industry will thrive.
              </p>
              <h5>Learn more</h5>
            </div>
            <div className="col-2">
              <div className="row-1">
                <div className="col-2-1">
                  <p>Program with JavaScript</p>
                </div>
                <div className="col-2-2">
                  <p>Version Control with Git</p>
                </div>
              </div>
              <div className="row-2">
                <div className="col-2-1">
                  <p>Web Development with React</p>
                </div>
                <div className="col-2-2">
                  <p>Building APIs with NodeJS</p>
                </div>
              </div>
              <div className="row-3">
                <div className="col-2-1">
                  <p>Managing Data with MongoDB</p>
                </div>
                <div className="col-2-2">
                  <p>Deploying with Heroku</p>
                </div>
              </div>
            </div>
          </section>

          <section className="design-different">
            <div className="col-1">
              <div className="row-1">
                <div className="col-2-1">
                  <p>Design User Interfaces</p>
                </div>
                <div className="col-2-2">
                  <p>Craft User Experiences</p>
                </div>
              </div>
              <div className="row-2">
                <div className="col-2-1">
                  <p>Apply Design Thinking</p>
                </div>
                <div className="col-2-2">
                  <p>Build Information Architecture</p>
                </div>
              </div>
              <div className="row-3">
                <div className="col-2-1">
                  <p>Copy write for Projects</p>
                </div>
                <div className="col-2-2">
                  <p>Brand Products</p>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h6>For Designers</h6>
              <h2>Design Different</h2>
              <p>
                We love to make things work perfectly. That’s why our design
                learning path exposes you to the science of user-oriented
                design. <br />
                <br /> Design is at the heart of everything we do at Genesys.
                Right from the start of the program, you’ll get your hands dirty
                as you get practically involved in the world’s most modern
                design concepts. At Genesys, we’re building designers who put
                the users first.
              </p>
              <h5>Learn more</h5>
            </div>
          </section>

          <section className="eligible">
            <div className="copy">
              <h2>Who is Eligible?</h2>
              <p>
                To be a participant of lernable, you need to be a young and
                passionate person interested in launching a super tech career.
                You will need to have foundational knowledge in whatever
                learning path you are applying for and be available for the six
                month duration of the program. <br />
                <br /> To become a part of the Genesys family, you must express
                some of the qualities we consider important. You are someone
                that takes responsibilities and initiatives. You will also
                express the ability to produce quality stuff in good time with
                high consistency.
              </p>
            </div>
            <div className="photo">
              <img src={Family} />
            </div>
          </section>

          <section className="culture">
            <div className="photo">
              <img src={Culture} />
            </div>
            <div className="copy">
              <h2>Our Culture</h2>
              <p>
                Our culture are the unspoken things that make us who we are at
                Genesys. To become one of us, you need to be like the rest of
                us. We believe that excellence is a culture, and we are
                committed to a philosophy of consistent improvement in
                everything we do. We are passionate, candid and we trust in the
                power of collaboration.
              </p>
            </div>
          </section>

          <section className="learning">
            <div className="copy">
              <h2>Learning can be fun…</h2>
              <p>
                We believe learning should be a fun experience. For this reason,
                we don’t do all the learning in the classroom. <br />
                <br /> The Learnable experience can not be complete without the
                bag of fun times which you’ll have. To us, every task is an
                opportunity to have some fun. But we do well to throw in a good
                number of activities to add to this. You will find yourself
                partaking in a lot of healthy activities such as cooking,
                sports, music, hangouts, and even random dates. <br />
                <br />
                Trust us when we say we know how to have fun.
              </p>
            </div>
            <div className="photo">
              <img src={Learning} />
            </div>
          </section>

          <section className="learning-is-fun">
            <div className="photo">
              <img src={Learner} />
            </div>
            <div className="copy">
              <h2>Learn from the Experts</h2>
              <p>
                As a learnable intern, you will be learning from the best
                software developers and product designers our industry has to
                offer. You will spend the first 3 months in the classroom with
                industry experts who have a wealth of experience from developing
                amazing products for various customers in our industry.
              </p>
            </div>
          </section>

          <section className="learning-activities">
            <div className="copy">
              <h2>Learning doesn’t always have to be in the classroom</h2>
              <p>
                We have designed other learning activities that aren’t
                <br />
                classroom-based. You will learn how to be a better person, how
                to have good conversations, how to work better with people and
                most importantly, how to lead other people. Hey! We’ll even
                teach you how to run a business during the Learnable Business
                Sessions.
              </p>
            </div>
            <div className="photo">
              <img src={Activities} />
            </div>
          </section>

          <section className="team">
            <div className="photo">
              <img src={Team} />
            </div>
            <div className="copy">
              <h2>Apply Your Knowledge</h2>
              <p>
                Before you’re done with Learnable, you will apply everything
                you’ve learned. You’ll be part of a team made up of 2 designers
                and 4 developers. You’ll get to work alongside the Genesys team
                on projects and we’ll teach you how “the sauce” is made. By
                combining technology, design, and great ideas, your team will
                have the unique opportunity to collaborate with the Genesys team
                to bring your own concept to life, from the first pen sketches
                to the final functioning product. You’ll then get to show off
                your special project to everyone.
              </p>
              <h5>Get Started</h5>
            </div>
          </section>

          <section className="faq-learn">
            <h2>FAQ</h2>
            <div className="faq-article">
              <form>
                <select>
                  <option>How many people can attend a course?</option>
                </select>
                <hr />
                <select>
                  <option>What’s the learning experience like?</option>
                </select>
                <hr />
                <select>
                  <option>How many people can attend a course?</option>
                </select>
                <hr />
                <select>
                  <option>Who are the coaches?</option>
                </select>
                <hr />
                <select>
                  <option>How far in advance should we book?</option>
                </select>
                <hr />
                <select>
                  <option>Can you customize your courses?</option>
                </select>
                <hr />
              </form>
              <h5>See all</h5>
            </div>
          </section>

          <section className="journal">
            <h2>Journal</h2>
            <h5>View all</h5>
            <div className="col">
              <div className="col-1">
                <div className="col-1-img">
                  <img src={Image23} />
                </div>
                <div className="col-text">
                  <h5>Inspiration</h5>
                  <h2>
                    Learn Design Thinking like a Pro and Build Projects that
                    People will care about
                  </h2>
                  <h6>David Mong, Apr 9, 2020</h6>
                </div>
              </div>
              <div className="col-2">
                <div className="col-2-img">
                  <img src={Image24} />
                </div>
                <div className="col-text">
                  <h5>Inspiration</h5>
                  <h2>
                    Learn Design Thinking like a Pro and Build Projects that
                    People will care about
                  </h2>
                  <h6>David Mong, Apr 9, 2020</h6>
                </div>
              </div>
              <div className="col-3">
                <div className="col-3-img">
                  <img src={Image25} />
                </div>
                <div className="col-text">
                  <h5>Inspiration</h5>
                  <h2>
                    Learn Design Thinking like a Pro and Build Projects that
                    People will care about
                  </h2>
                  <h6>David Mong, Apr 9, 2020</h6>
                </div>
              </div>
              <div className="col-4">
                <div className="col-4-img">
                  <img src={Image26} />
                </div>
                <div className="col-text">
                  <h5>Inspiration</h5>
                  <h2>
                    Learn Design Thinking like a Pro and Build Projects that
                    People will care about
                  </h2>
                  <h6>Theresa Brazen, Apr 9, 2020</h6>
                </div>
              </div>
            </div>
          </section>

          <section className="mentioned-in">
            <img src={Mention} />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Learnable;
