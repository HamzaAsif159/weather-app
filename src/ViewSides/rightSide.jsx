import React from "react"

export default function RightSide() {
  return (
    <div className="rightSide">
      <h1 className="city">Los Angles</h1>
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
  )
}
