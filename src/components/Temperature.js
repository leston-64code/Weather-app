import React, { useEffect, useState } from "react";
import "./style.css";

function Temperature() {
  const [searchdata, setSearchData] = useState("");
  const [newData, setNewData] = useState();
  
  const getWeatherData = async () => {
    // try {
    //   let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchdata}&units=metric&appid=b7560a133b4600aada1d2bd79af34b68`;

    //   const res = await fetch(url);
    //   const data = await res.json();
    //   await setNewData(data);
    // } catch (error) {
    //   console.log(error);
    // }

    try {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchdata.trim()}&units=metric&appid=b7560a133b4600aada1d2bd79af34b68`)
      .then((res)=>{
        return res.json()
      }).then((data)=>{
        // setNewData(data)
        // console.log(data)
        if(data.cod !== 400){
          setNewData(data)
        // console.log(data)
        
        }else{
          return  alert("error")
        }
        // return 
      }).catch((error)=>{
        // console.log(error)
        return 0
      })
    } catch (error) {
      return console.log(error)
    }

  };

  useEffect(() => {
    async function getWeatherDataone(user) {
      try {
        let urle = `https://api.openweathermap.org/data/2.5/weather?q=${user}&units=metric&appid=b7560a133b4600aada1d2bd79af34b68`;
        const rese = await fetch(urle);
        const datae = await rese.json();
        setNewData(datae);
      } catch (error) {
        console.log(error);
      }
    }
    getWeatherDataone("mumbai");
  }, []);

  if (newData ){
    // Setttig sunset data
    // console.log(newData)
    let sec = newData.sys.sunset;
    let date = new Date(sec * 1000);
    let  timeStr = `${date.getHours()}:${date.getMinutes()}`;
  

    return (
      <div className="one">
        <div className="two">
          <div className="search-box">
            <div className="search-box-one">
              <input
                type="text"
                className="search-input"
                placeholder="Enter city"
                value={searchdata}
                onChange={(e) => {
                  setSearchData(e.target.value);
                }}
              />
            </div>
            <div className="search-box-two">
              <button className="search-button" onClick={getWeatherData}>
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="three">
          <div className="three-one">
            {/* <i className={`wi ${newIcon} icon-one`}></i> */}
            {/* <i className={newData.weather[0].main=="Haze"?}></i> */}
            {newData.weather[0].main === "Haze" ? (
              <i className="wi wi-day-haze icon-one"></i>
            ) : newData.weather[0].main === "Rain" ? (
              <i className="wi wi-raindrops icon-one"></i>
            ) : newData.weather[0].main === "Clouds" ? (
              <i className="wi wi-cloudy icon-one"></i>
            ) : newData.weather[0].main === "Clear" ? (
              <i className="wi wi-day-sunny icon-one"></i>
            ) : newData.weather[0].main === "Mist" ? (
              <i className="wi wi-night-fog icon-one"></i>
            ) : newData.weather[0].main === "Thunderstorm" ? (
              <i className="wi wi-day-thunderstorm icon-one"></i>
            ) :(
              <i className="wi wi-day-sunny icon-one"></i>
            )}
          </div>
          <div className="three-two">
            <div className="setter">
              <div className="three-two-one ok">
                <div className="super">
                  <div className="super-one">
                    <p>{newData.main.temp}&#8451;</p>
                  </div>
                  <div className="super-two">
                    <p className="child-one">{newData.weather[0].main}</p>
                    <br />
                    <p className="child-two">
                      {newData.name},{newData.sys.country}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="three-two-two ok">
                <p className="super-child-one">{new Date().toLocaleString()}</p>
                {/* <p className="super-child-two">09:01 AM</p> */}
              </div>
            </div>
          </div>
          <div className="three-three">
            <div className="three-three-flexer">
              <div className="last-one hello ">
                <div className="last-container">
                  <div className="onner">
                    <i className="wi wi-sunset"></i>
                  </div>
                  <div className="twoer">
                    <p>
                      Sunset
                      <br />
                      {timeStr}
                    </p>
                  </div>
                </div>
              </div>
              <div className="last-two hello ">
                <div className="last-container">
                  <div className="onner">
                    <i className="wi wi-humidity"></i>
                  </div>
                  <div className="twoer">
                    <p>
                      Humidity
                      <br />
                      {newData.main.humidity}
                    </p>
                  </div>
                </div>
              </div>
              <div className="last-three hello ">
                <div className="last-container">
                  <div className="onner">
                    <i className="wi wi-fog"></i>
                  </div>
                  <div className="twoer">
                    <p>
                      Pressure
                      <br />
                      {newData.main.pressure}
                    </p>
                  </div>
                </div>
              </div>
              <div className="last-four hello ">
                <div className="last-container">
                  <div className="onner">
                    <i className="wi wi-strong-wind"></i>
                  </div>
                  <div className="twoer">
                    <p>
                      Wind
                      <br />
                      {newData.wind.speed},km/hr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Temperature;
