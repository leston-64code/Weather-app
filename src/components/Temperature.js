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
        <div className="three-one">one</div>
        <div className="three-two">two</div>
        <div className="three-three">three</div>
      </div>
    </div>
  );
}

export default Temperature;
