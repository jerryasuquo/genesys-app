import React, { Component } from "react";
import LearnableNav from "./LearnableNav";
import Footer from "./Footer";
import HappyGuy2 from "../images/happy-guy 2.png";
import Expected2 from "../images/expected 2.png";

class TheLearnableProductDesigner extends Component {
  render() {
    return (
      <div>
        <LearnableNav />
        <main>
          <section className="designers">
            <div className="col-1">
              <h1>The Learnable Product Designer</h1>
              <p>
                At Genesys, you'll be exposed to every discipline in our
                creative process – UX, UI, interaction design, and copywriting.
                You’ll be part of a dynamic team that's made up of like-minded,
                talented people. You'll work hard with them to create things
                that will amaze everyone everywhere. <br />
                <br />
                In addition to your team projects, you’ll be lending a hand to
                the creative team. Participating in brainstorm sessions,
                building winning pitches, preparing assets, and design
                scriptures for productions, you'll be in the thick of it all.
                <br />
                <br />
                Oh, and you’ll make amazing friends while you're at it!
              </p>
            </div>
            <div className="col-2">
              <img src={HappyGuy2} />
            </div>
            <div className="quote">
              <p>
                “The greats weren’t great because at birth they could paint. The
                greats were great because they painted a lot.” - Macklemore
              </p>
            </div>
            <div className="article">
              <div className="expected-img">
                <img src={Expected2} />
              </div>
              <div className="expected-text">
                <h2>We expect you to…</h2>
                <p>
                  Play nice with other people. <br />
                  <br />
                  Be an actively engaged person. That means you are present,
                  motivated, and social. <br />
                  <br />
                  Understand how to use the Figma design software <br />
                  <br />
                  Be able to create initial design layouts with confidence and
                  know-how to effectively communicate concepts to everyone on
                  your team. <br />
                  <br />
                  Have a basic understanding of design principles and theories
                  To have creative courage. This is a tough industry, only the
                  brave and sturdy remain. <br />
                  <br />
                  Be prepared to defend your decisions and take constructive
                  criticism. <br />
                  <br />
                  To us, beauty without substance has no value. At Genesys,
                  design thinking and execution are equally important, so we’re
                  constantly on the lookout for not only the how but also the
                  why.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default TheLearnableProductDesigner;
