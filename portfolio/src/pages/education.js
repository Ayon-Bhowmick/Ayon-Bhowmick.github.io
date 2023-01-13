import * as React from "react"
import "../styles/education.scss"
import "../styles/global.scss"
import Title from "./title"


const Education = () => {
  return (
    <div className="body">
      <div className="title-container">
        <Title name={"Education"} />
      </div>
      <div className="info-container">
        <h3>Lehigh University</h3>
        <p className="sub">August 2020 - Expected Graduation: May 2024</p>
        <p>Computer Science B.S. Data Science minor</p>
        <p>Relevant Coursework: Introduction to Programming, Programming and Data Structures, System Software, Software Engineering, Programming Languages, Computer Organization and Architecture, Linear Methods, Foundations of Discrete Structures and Algorithms, Introduction to Data Science, Machine Learning</p>
      </div>
    </div>
  )
}

export default Education
