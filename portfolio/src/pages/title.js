import * as React from "react"
import "../styles/title.scss"
// import "../styles/global.scss"


const Title = ({name}) => {
  const colorMap = {
    "Education": "orange",
    "Skills": "yellow",
    "Experience": "green",
    "Projects": "blue"
  }

  return (
    <>
      <div className="line" id={colorMap[name]}/>
      <div className="bar" id={colorMap[name]}/>
      <h1 className="text">{name}</h1>
    </>
  )
}

export default Title
