import React from "react";
import { Link, withRouter } from "react-router-dom";

function Links(props) {
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
            <h1 class="font-weight-light">Links</h1>
            <p>
              This website was originally created for Valentine's Day 2021.
              Hopefully, it will serve as an electronic journal of the things we do together
              and be a quick landing page for us to find old pictures, links, and hobbies!
            </p>
            <ul>
                <a href="https://docs.google.com/spreadsheets/d/1dHHWaN2F0u5ZdRQ1aXGqCVHe7kGJ4vF8Ft8pdYIR6sM/edit?ts=601644ba#gid=364066282">swole bois</a>
                <a href="https://docs.google.com/spreadsheets/d/1y0LIJz1kcEbg5mIAjNgyLqSL4Uu_PaYeegYQuV_5fMI/edit#gid=0">my ass farm</a>
                <a href="https://old.reddit.com/r/Fitness/comments/2e79y4/dumbbell_ppl_proposed_alternative_to_dumbbell/">werk out</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;