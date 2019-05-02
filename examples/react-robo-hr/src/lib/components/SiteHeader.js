import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "@reach/router";
// TODO: Don't think this is the right home for this - meant as a 'use-once' kind of thing
// find a better place for it later.

const SiteHeader = () => {
  const [burgerExpanded, setBurgerExpanded] = useState(false);

  const burgerClass = classNames("navbar-burger", "burger", {
    "is-active": burgerExpanded
  });
  const navClass = classNames("navbar-menu", {
    "is-active": burgerExpanded
  });
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <a
        role="button"
        className={burgerClass}
        aria-label="menu"
        aria-expanded="false"
        onClick={() => setBurgerExpanded(state => !state)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>

      <div className={navClass}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Dashboard
          </Link>

          <Link to="/robots" className="navbar-item">
            Robots
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

SiteHeader.displayName = "SiteHader";

export default SiteHeader;
