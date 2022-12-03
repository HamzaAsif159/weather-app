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
        <h1>{moment().format("MMM Do YY")}</h1>
        <form className="form">
          <input type="text" value={inputText} onChange={handleChange} />
        </form>
      </div>
      <div className="leftLower">
        <h3 className="overview">Today Overview</h3>
        <div className="weatherDetails">
          <div className="detailBox">
            <h3>Wind</h3>
            <h3>8.1 mph</h3>
          </div>
          <div className="detailBox">
            <h3>Highest/Lowest</h3>
            <h3>55/45</h3>
          </div>
          <div className="detailBox">
            <h3>Pressure</h3>
            <h3>45</h3>
          </div>
          <div className="detailBox">
            <h3>Humidity</h3>
            <h3>90%</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
