import { React, useState } from "react"
import moment from "moment"

export default function LeftSide() {
  const [inputText, setInputText] = useState("")

  function handleChange(event) {
    setInputText(event.target.value)
  }

  return (
    <div className="leftSide">
      <div className="leftTop">
        <h2 className="dateTime">{moment().format("MMM Do, YY")}</h2>
        <form className="form">
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            placeholder="Search city"
            className="searchBar"
            required
          />
          <button className="searchBtn">Search</button>
        </form>
      </div>
      <div className="leftLower">
        <h3 className="overview">Today Overview</h3>
        <div className="weatherDetails">
          <div className="detailBox">
            <img src="/icons/wind.png" a lt="wind-icon" className="icon" />

            <h3 className="figureHead">Wind</h3>
            <h3 className="figure">8.1 mph</h3>
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
  )
}
