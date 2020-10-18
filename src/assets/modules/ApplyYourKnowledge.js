import React, { Component } from "react";
import LearnableNav from "./LearnableNav";
import Footer from "./Footer";
import ApplyKnowledge from "../images/apply.png";
import GetIn from "../images/get-in.png";

class ApplyYourKnowledge extends Component {
  render() {
    return (
      <div>
        <LearnableNav />
        <main>
          <section className="apply-knowledge">
            <div className="col-1">
              <h1>Apply Your Knowledge</h1>
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
            </div>
            <div className="col-2">
              <img src={ApplyKnowledge} />
            </div>
            <div className="article">
              <div className="get-in">
                <img src={GetIn} />
              </div>
              <div className="how-to-text">
                <h2>How To Get In</h2>
                <p>
                  We are very deliberate with our selection process. We are on a
                  quest to find amazing people who are passionate about learning
                  and growing their careers in the software industry. To this
                  end, we have designed our selection process to help us get
                  such people.
                </p>
              </div>
              <div className="apply-text">
                <h2>Online Application</h2>
                <p>
                  Introduce yourself to us by filling out our application form.
                  When you’re done filling out the form, proceed to download our
                  prep curriculum that contains everything you need to prepare
                  for the physical and technical assessment.
                </p>
                <h5>Apply here</h5>
              </div>
              <div className="interview-text">
                <h2>Phone Call Interviews</h2>
                <p>
                  We will reach out to you to discuss possible opportunities,
                  ascertain where you fit in with us, and answer any questions
                  you might have about the program. It’s supposed to be a chat,
                  getting nervous defeats the aim.
                </p>
              </div>
              <div className="assessment-text">
                <h2>Final Assessment</h2>
                <p>
                  At this stage, we’ll get to meet you in person for the first
                  time. You’ll be invited to the hub for a physical assessment
                  that includes a technical assessment, a psychometric test and
                  a face-to-face chat with our team.
                </p>
              </div>
              <div className="get-in-text">
                <h2>Get In</h2>
                <p>
                  If you make it to this stage, you can pack your bags and head
                  down to the beautiful city of Enugu. We will join you on your
                  journey to build that career of your dreams and provide all
                  the help, support and love that we can muster along the way!
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

export default ApplyYourKnowledge;
