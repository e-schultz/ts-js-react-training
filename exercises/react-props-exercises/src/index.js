import React from "react";
import ReactDOM from "react-dom";
import {
  Menu,
  MenuLabel,
  MenuList,
  MenuLink,
  Section,
  Container,
  Columns,
  Column
} from "bloomer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import "bulma/css/bulma.css";
import "./styles.css";

import PropExample from "./examples/props-examples";
import PropVar from "./examples/props-variables";
function App() {
  return (
    <Router>
      <Section>
        <Columns isMobile>
          <Column isSize="1/3">
            <Menu>
              <MenuLabel>React Props Example</MenuLabel>
              <MenuList>
                <li>
                  <NavLink activeClassName="is-active" to="/props-example">
                    Props and Destructuring
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/props-var">
                    Props and Variables
                  </NavLink>
                </li>
              </MenuList>

              <MenuLabel>Exercises</MenuLabel>
              <MenuList>
                <li>
                  <MenuLink>TBC</MenuLink>
                </li>
              </MenuList>
            </Menu>
          </Column>
          <Container>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/props-example">
                <PropExample />
              </Route>
              <Route exact path="/props-var">
                <PropVar />
              </Route>
            </Switch>
          </Container>
        </Columns>
      </Section>
    </Router>
  );
}

const Home = () => <div>Hello</div>;
const HomeTwo = () => <div>HelloTwo</div>;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
