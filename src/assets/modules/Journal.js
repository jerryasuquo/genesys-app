import React, { Component } from "react";
import LearnableNav from "./LearnableNav";
import Footer from "./Footer";
import LikeAPro from "../images/like_a_pro.png";
import ProfilePic from "../images/profile.png";
import Image23 from "../images/image 23.png";
import Image24 from "../images/image 24.png";
import Image25 from "../images/image 25.png";
import Image26 from "../images/image 26.png";

class Journal extends Component {
  render() {
    return (
      <div>
        <LearnableNav />
        <main>
          <section className="hero-journal">
            <h1>Journal</h1>
            <button>CATEGORIES</button>
          </section>

          <section className="hero-journal-main">
            <div className="col-1">
              <img src={LikeAPro} />
            </div>

            <div className="col-2">
              <h5>INSPIRATION</h5>
              <h2>
                Learn Design Thinking like a Pro and Build Projects that People
                will care about
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                sapien arcu vitae orci at molestie. Pharetra quisque donec
                accumsan rhoncus risus. Urna magna turpis duis imperdiet elit,
                et, hendrerit viverra risus. Vulputate euismod commodo donec
                tincidunt et, aliquam. Eget scelerisque netus habitant dui
                porttitor cursus. Ipsum sem ut tortor ac ullamcorper. Lacus.
              </p>
              <img src={ProfilePic} />
              <span className="profile-info">David Mong, Apr 9, 2020</span>
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

          <section className="journal-row">
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
            <button>LOAD MORE</button>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Journal;
