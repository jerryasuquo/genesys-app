import React, { Component } from "react";
import LearnableNav from "./LearnableNav";
import Footer from "./Footer";
import Hand from "../images/hand.png";

class Journal extends Component {
  render() {
    return (
      <div>
        <LearnableNav />
        <main>
          <section className="faq">
            <div className="col">
              <div className="col-1">
                <h1>FAQ</h1>
              </div>
              <div className="col-2">
                <img src={Hand} />
              </div>
            </div>
          </section>
          <section className="faq-article-main">
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
              <select>
                <option>Can you customize your courses?</option>
              </select>
              <hr />
              <select>
                <option>Can you customize your courses?</option>
              </select>
              <hr />
              <select>
                <option>Can you customize your courses?</option>
              </select>
              <hr />
              <select>
                <option>Can you customize your courses?</option>
              </select>
              <hr />
              <select>
                <option>Can you customize your courses?</option>
              </select>
              <hr />
              <select>
                <option>Can you customize your courses?</option>
              </select>
              <hr />
              <select>
                <option>Can you customize your courses?</option>
              </select>
              <hr />
              <select>
                <option>Can you customize your courses?</option>
              </select>
              <hr />
              <select>
                <option>Can you customize your courses?</option>
              </select>
              <hr />
              <select>
                <option>Can you customize your courses?</option>
              </select>
              <hr />
            </form>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Journal;
