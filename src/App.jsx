import { React, useState } from "react"
import moment from "moment"
import axios from "axios"

function App() {
  const [location, setLocation] = useState("")
  const [data, setData] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1a6853c7595c5c99794891a5975108d4`

  function searchLocation(e) {
    e.preventDefault()
    axios.get(url).then((res) => setData(res.data))

    console.log(data)
  }

  function handleChange(event) {
    setLocation(event.target.value)
    console.log(event.target.value)
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
              <h3 className="figure">{data.wind.speed} mph</h3>
            </div>
            <div className="detailBox">
              <img
                src="/icons/thermometer.svg"
                alt="themometer-icon"
                className="icon"
              />
              <h3 className="figureHead">Highest/Lowest</h3>
              <h3 className="figure">55/45</h3>
            </div>
            <div className="detailBox">
              <img
                src="/icons/pressure.svg"
                alt="pressure-icon"
                className="icon"
              />
              <h3 className="figureHead">Pressure</h3>
              <h3 className="figure">45</h3>
            </div>
            <div className="detailBox">
              <img
                src="/icons/leaves-two.svg"
                alt="humidity-icon"
                className="icon"
              />
              <h3 className="figureHead">Humidity</h3>
              <h3 className="figure">90%</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <h1 className="city">{data.name}</h1>
        <div className="cityWeather">
          <h1>57.3 F</h1>
          <h3>Clouds</h3>
        </div>
        <div className="sunSetContainer">
          <h3>Sunrise & Sunset</h3>
          <div className="sunSet">Sunrise at 6:00</div>
          <div className="sunSet">Sunset at 6:00</div>
        </div>
      </div>
    </div>
  )
}

export default App
