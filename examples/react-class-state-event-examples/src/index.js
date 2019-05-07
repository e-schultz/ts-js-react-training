import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

import Notes from "./Notes";
import CascadingDropdownExample01 from "./examples/cascading-dropdown/CascadingDropdownExample01";
import CascadingDropdownExample02 from "./examples/cascading-dropdown/CascadingDropdownExample02";
import CascadingDropdownExample03 from "./examples/cascading-dropdown/CascadingDropdownExample03";

import "./styles.css";

const Home = () => (
  <section>
    <Notes />
  </section>
);
function App({ children }) {
  
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="cascading-dropdown-01">Cascading Dropdown Start</Link> |{" "}
        <Link to="cascading-dropdown-02">Cascading Dropdown With State</Link> |{" "}
        <Link to="cascading-dropdown-03">Cascading Dropdown With Parent Child</Link>
      </nav>

      {children}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App path="/">
      <Home path="/" />
      <CascadingDropdownExample01 path="cascading-dropdown-01" />
      <CascadingDropdownExample02 path="cascading-dropdown-02" />
      <CascadingDropdownExample03 path="cascading-dropdown-03" />
    </App>
  </Router>,
  rootElement
);
