import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              This website was originally created for Valentine's Day 2021.
              Hopefully, it will serve as an electronic journal of the things we do together
              and a quick landing page for us to find old pictures, links, and hobbies!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;