import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/jzhu831/">
            website of bbgorl and dumbass
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/jzhu831/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/jzhu831/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/jzhu831/photos" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/jzhu831/photos">
                  Photos
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/jzhu831/links" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/jzhu831/links">
                  Links
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/jzhu831/card" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/jzhu831/card">
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