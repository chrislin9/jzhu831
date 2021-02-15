import React from "react";
import image from '../images/Links1.jpeg'

function Links(props) {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={image}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Links</h1>
            <p>
              This website was originally created for Valentine's Day 2021.
              Hopefully, it can become a journal of the things we do together
              and be a quick landing page for us to find old pictures, links, and hobbies!
            </p>
            <p>
              <a href="https://docs.google.com/spreadsheets/d/1dHHWaN2F0u5ZdRQ1aXGqCVHe7kGJ4vF8Ft8pdYIR6sM/edit?ts=601644ba#gid=364066282">swole bois</a>
            </p>
            <p>
              <a href="https://docs.google.com/spreadsheets/d/1y0LIJz1kcEbg5mIAjNgyLqSL4Uu_PaYeegYQuV_5fMI/edit#gid=0">my ass farm</a>
            </p>
            <p>
              <a href="https://old.reddit.com/r/Fitness/comments/2e79y4/dumbbell_ppl_proposed_alternative_to_dumbbell/">werk out</a>
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=XBjFBS72t7U&feature=youtu.be">Jessie is 21!</a>
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=XBjFBS72t7U&feature=youtu.be">Chris is 22!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;