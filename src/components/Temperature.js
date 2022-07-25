import React from "react";
import "./style.css";

function Temperature() {
  return (
    <div className="one">


      <div className="two">
        <div className="search-box">
          <div className="search-box-one">
            <input
              type="text"
              className="search-input"
              placeholder="Enter city"
            />
          </div>
          <div className="search-box-two">
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>

      <div className="three">
        <div className="three-one">
        <i class="wi wi-day-storm-showers icon-one"></i>
        </div>
        <div className="three-two">two</div>
        <div className="three-three">
          <div className="three-three-flexer">
          <div className="last-one hello ">
            <div className="last-container">
              <div className="onner"><i class="wi wi-night-sleet"></i></div>
              <div className="twoer">gg</div>
            </div>
          </div>
          <div className="last-two hello ">
          <div className="last-container">
          <div className="onner"><i class="wi wi-night-sleet"></i></div>
              <div className="twoer">gg</div>
          </div>
          </div>
          <div className="last-three hello ">
          <div className="last-container">
          <div className="onner"><i class="wi wi-night-sleet"></i></div>
              <div className="twoer">gg</div>
          </div>
          </div>
          <div className="last-four hello ">
          <div className="last-container">
          <div className="onner"><i class="wi wi-night-sleet"></i></div>
              <div className="twoer">gg</div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temperature;
