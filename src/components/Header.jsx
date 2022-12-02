import React, { useEffect } from "react"
import { useState } from "react"
import moment from "moment"

export default function SearchBar() {
  const [inputText, setInputText] = useState("")
  let time
  function handleChange(event) {
    setInputText(event.target.value)
  }

  return (
    <div>
      {moment().format("MMM Do YY")}
      <form className="form">
        <input type="text" value={inputText} onChange={handleChange} />
      </form>
    </div>
  )
}
