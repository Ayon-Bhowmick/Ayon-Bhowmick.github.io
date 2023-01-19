import * as React from "react"
import "../styles/title.scss"


const Title = ({name}) => {
  const map = {
    "Education": {
      "color": "orange",
      "bar": "bar",
      "line": "line"
    },
    "Skills": {
      "color": "yellow",
      "bar": "bar",
      "line": "line"
    },
    "Experience": {
      "color": "green",
      "bar": "bar",
      "line": "line"
    },
    "Projects": {
      "color": "blue",
      "bar": "projBar",
      "line": "projLine"
    },
    "Connect": {
      "color": "purple",
      "bar": "conBar",
      "line": "conLine"
    }
  }
  const {color, bar, line} = map[name]

  return (
    <>
      <div className={line} id={color}/>
      <div className={bar} id={color}/>
      <h1 className="text">{name}</h1>
    </>
  )
}

export default Title
