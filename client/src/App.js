import React from "react";
import Landing from "./pages/Landing/Landing.js";
import About from "./pages/About/About.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
