import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            website of bbgorl and dumbass
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/photos" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/photos">
                  Photos
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/links" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/links">
                  Links
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/card" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/card">
                  Card
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);