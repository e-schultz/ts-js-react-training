import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import ExampleOne from "./ExampleOne";
import ExampleTwo from "./ExampleTwo";
function Home() {
  return <h1>Prop Examples</h1>;
}
function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/example-1">Props Intro</Link>
          </li>
          <li>
            <Link to="/example-2">Props Destructuring</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/example-1">
            <ExampleOne />
          </Route>
          <Route path="/example-2">
            <ExampleTwo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
