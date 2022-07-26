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
        <div className="three-two">
          <div className="setter">
            <div className="three-two-one ok">
              <div className="super">
                <div className="super-one">
               <p>25.57&#8451;</p>
                  </div>
                <div className="super-two">
                  <p className="child-one">CLOUDS</p><br />
                  <p className="child-two">Tokyo,JP</p>
                </div>
              </div>
            </div>
            <div className="three-two-two ok">
              <p className="super-child-one">26/07/22</p>
              <p className="super-child-two">09:01 AM</p>
            </div>
          </div>
        </div>
        <div className="three-three">
          <div className="three-three-flexer">
          <div className="last-one hello ">
            <div className="last-container">
              <div className="onner"><i class="wi wi-sunset"></i></div>
              <div className="twoer"><p>Sunset
              <br />10:03 PM</p></div>
            </div>
          </div>
          <div className="last-two hello ">
          <div className="last-container">
          <div className="onner"><i class="wi wi-humidity"></i></div>
              <div className="twoer"><p>Humidity
              <br />10:03 PM</p></div>
          </div>
          </div>
          <div className="last-three hello ">
          <div className="last-container">
          <div className="onner"><i class="wi wi-fog"></i></div>
              <div className="twoer"><p>Pressure
              <br />10:03 PM</p></div>
          </div>
          </div>
          <div className="last-four hello ">
          <div className="last-container">
          <div className="onner"><i class="wi wi-strong-wind"></i></div>
              <div className="twoer"><p>Wind
              <br />10:03 PM</p></div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temperature;
