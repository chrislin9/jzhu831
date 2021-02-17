import React from "react";
import photo1 from '../images/photos1.jpg'
import photo2 from '../images/photos2.jpeg'
import photo3 from '../images/photos3.jpg'
import photo4 from '../images/photos4.jpg'
import photo5 from '../images/photos5.jpg'
import photo6 from '../images/photos6.jpg'
import photo7 from '../images/photos7.jpg'
import photo8 from '../images/photos8.jpg'
import photo9 from '../images/photos9.jpeg'

function Photos() {
  return (
    <div className="photos">
      <div class="container">
        <div class="row align-items-center photo_group">
          <div class="col-sm-7  my-2">
            <img
              class="img-fluid rounded my-2"
              src={photo1}
              alt=""
            />
          </div>
          <div class="col-sm-7  my-2">
            <img
              class="img-fluid rounded my-2"
              src={photo2}
              alt=""
            />
          </div>
          <div class="col-lg-7  my-2">
            <img
              class="img-fluid rounded my-2"
              src={photo3}
              alt=""
            />
          </div>
          <div class="col-lg-7  my-2">
            <img
              class="img-fluid rounded my-2"
              src={photo4}
              alt=""
            />
          </div>
          <div class="col-lg-7  my-2">
            <img
              class="img-fluid rounded my-2"
              src={photo5}
              alt=""
            />
          </div>
          <div class="col-lg-7  my-2">
            <img
              class="img-fluid rounded my-2"
              src={photo6}
              alt=""
            />
          </div>
          <div class="col-lg-7  my-2">
            <img
              class="img-fluid rounded my-2"
              src={photo7}
              alt=""
            />
          </div>
          <div class="col-lg-7  my-2">
            <img
              class="img-fluid rounded my-2"
              src={photo8}
              alt=""
            />
          </div>
          <div class="col-lg-7  mt-2 mb-4">
            <img
              class="img-fluid rounded my-2"
              src={photo9}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos;