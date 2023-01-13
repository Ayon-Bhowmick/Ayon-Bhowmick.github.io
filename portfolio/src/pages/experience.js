import * as React from "react"
import "../styles/experience.scss"
import "../styles/global.scss"
import Title from "./title"


const Experience = () => {
  return (
    <div className="body">
      <div className="title-container">
        <Title name={"Experience"} />
      </div>
      <div className="info-container">
        <h3>Computer Science Department Grader</h3>
        <p className="sub">August 2022 - Present</p>
        <p>Conducted both group and one-on-one meetings with students in the Software Engineering class. Assisted with the students' debugging process. Graded students' project submissions and codebase.</p>
        <h3>HackHolyoke Hackathon Best Sustainability Hack</h3>
        <p className="sub">November  2021</p>
        <p>I won the HackHolyoke Best Sustainability Hack. I made a web app that tracks the expiration dates of your perishables and reminds you when they are going to go bad. This was done to help prevent food waste. This app was made using React and Material UI.</p>
        <h3>Heptology Laboratory Intern</h3>
        <p className="sub">June 2019 - August 2019</p>
        <p>Conducted experimentation on the connection between Hyaluronan production and the development of liver fibrosis. Worked with a team to develop a presentation to display findings.</p>
      </div>
    </div>
  )
}

export default Experience
