
import React from "react";
import image from '../images/home2.jpg'

function Home() {
  return (
    <div className="home">
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
            <h1 class="font-weight-light">Happy Valentine's Day!</h1>
            <p>
              I am so lucky to have you in my life, and you motivate me everyday
              to be a more thoughtful person and a dumber dumbass. To remember some of the
              things we do I decided to put them on this website. Enjoy and happy Valentine's Day! &lt;3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;