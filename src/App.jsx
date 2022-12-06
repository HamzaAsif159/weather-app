import { React, useState } from "react"
import moment from "moment"
import axios from "axios"

function App() {
  const [location, setLocation] = useState("")
  const [data, setData] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1a6853c7595c5c99794891a5975108d4&units=metric`

  function handleChange(event) {
    setLocation(event.target.value)
  }

  function searchLocation(e) {
    e.preventDefault()
    axios.get(url).then((res) => setData(res.data))
    setLocation("")
    console.log(data)
  }

  function timeFormat(timestamp) {
    var date = new Date(timestamp * 1000)

    var hours = date.getHours()

    var minutes = "0" + date.getMinutes()

    var seconds = "0" + date.getSeconds()
    return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2)
  }

  return (
    <div className="App">
      <div className="leftSide">
        <div className="leftTop">
          <h2 className="dateTime">{moment().format("MMM Do, YY")}</h2>
          <form className="form">
            <input
              type="text"
              value={location}
              onChange={handleChange}
              placeholder="Search city"
              className="searchBar"
              required
            />
            <button className="searchBtn" onClick={searchLocation}>
              Search
            </button>
          </form>
        </div>
        <div className="leftLower">
          <h3 className="overview">Today Overview</h3>
          <div className="weatherDetails">
            <div className="detailBox">
              <img src="/icons/wind.png" a lt="wind-icon" className="icon" />
              <h3 className="figureHead">Wind</h3>
              {data.main ? (
                <h3 className="figure">{data.main.temp} mph</h3>
              ) : (
                <h3 className="figure">-</h3>
              )}
            </div>
            <div className="detailBox">
              <img
                src="/icons/thermometer.svg"
                alt="themometer-icon"
                className="icon"
              />
              <h3 className="figureHead">Highest/Lowest</h3>
              {data.main ? (
                <h3 className="figure">
                  {data.main.temp_max}/{data.main.temp_min}
                </h3>
              ) : (
                <h3 className="figure">-</h3>
              )}
            </div>
            <div className="detailBox">
              <img
                src="/icons/pressure.svg"
                alt="pressure-icon"
                className="icon"
              />
              <h3 className="figureHead">Pressure</h3>
              {data.main ? (
                <h3 className="figure">{data.main.pressure} Pa</h3>
              ) : (
                <h3 className="figure">-</h3>
              )}
            </div>
            <div className="detailBox">
              <img
                src="/icons/leaves-two.svg"
                alt="humidity-icon"
                className="icon"
              />
              <h3 className="figureHead">Humidity</h3>
              {data.main ? (
                <h3 className="figure">{data.main.humidity}</h3>
              ) : (
                <h3 className="figure">-</h3>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="rightSide">
        {data.name ? (
          <h1 className="city">{data.name}</h1>
        ) : (
          <h1 className="city">-</h1>
        )}

        <div className="cityWeather">
          {data.main ? <h1>{data.main.temp} C</h1> : <h1>-</h1>}
          {data.weather ? <h3>{data.weather[0].main}</h3> : <h3>-</h3>}
        </div>
        <div className="sunSetContainer">
          <h3>Sunrise & Sunset</h3>
          {data?.sys?.sunrise ? (
            <div className="sunSet">
              Sunrise at {timeFormat(data.sys.sunrise)} (PKT)
            </div>
          ) : (
            <div className="sunSet">Sunrise at -</div>
          )}
          {data?.sys?.sunset ? (
            <div className="sunSet">
              Sunset at {timeFormat(data.sys.sunset)} (PKT)
            </div>
          ) : (
            <div className="sunSet">Sunset at -</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
