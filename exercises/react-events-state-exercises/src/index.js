import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

import "./styles.css";

import ErrorBoundary from "./ErrorBoundary";
let InputHandlerStart = lazy(() =>
  import("./exercises/input-handler/input-handler-start/InputHandler")
);
let InputHandlerEnd = lazy(() =>
  import("./exercises/input-handler/input-handler-end/InputHandler")
);

function App({ children }) {
  return (
    <div className="App">
      <h1>React - Event & State Exercises</h1>
      <ul>
        <li>
          Greeting Form - <Link to="input-handler-start"> Start</Link> |{" "}
          <Link to="input-handler-end">Solution</Link>
        </li>
      </ul>
      <ErrorBoundary>
        <section>{children}</section>
      </ErrorBoundary>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <App path="/">
          <InputHandlerStart path="/input-handler-start" />
          <InputHandlerEnd path="/input-handler-end" />
        </App>
      </Router>
    </Suspense>
  </ErrorBoundary>,
  rootElement
);
