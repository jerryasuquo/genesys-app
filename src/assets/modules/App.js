import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import Learnable from "./Learnable";
import TheLearnableSoftwareDeveloper from "./TheLearnableSoftwareDeveloper";
import TheLearnableProductDesigner from "./TheLearnableProductDesigner";
import ApplyYourKnowledge from "./ApplyYourKnowledge";
import Journal from "./Journal";
import Faq from "./Faq";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/learnable" component={Learnable} />
            <Route
              path="/thelearnablesoftwaredeveloper"
              component={TheLearnableSoftwareDeveloper}
            />
            <Route
              path="/thelearnableproductdesigner"
              component={TheLearnableProductDesigner}
            />
            <Route path="/applyyourknowledge" component={ApplyYourKnowledge} />
            <Route path="/journal" component={Journal} />
            <Route path="/faq" component={Faq} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
