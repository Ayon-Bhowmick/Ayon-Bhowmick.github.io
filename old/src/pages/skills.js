import * as React from "react"
import "../styles/global.scss"
import Title from "./title"


const Skills = () => {
  return (
    <div className="body">
      <div className="title-container">
        <Title name={"Skills"} />
      </div>
      <div className="info-container">
        <div className="box">
          <h3 id="skills">Languages</h3>
          <p>Python, Java, Javascript/Typescript, C, Rust, R, x86 Assembly, SQL</p>
        </div>
        <div className="box">
          <h3 id="skills">Data Science/Machine Learning</h3>
          <p>PyTorch, NumPy, Matplotlib, OpenCV, Computer Vision</p>
        </div>
        <div className="box">
          <h3 id="skills">Frontend Development</h3>
          <p>React.js, Next.js, Material UI library, Node.js, Gatsby, HTML5/CSS, Sass, React-Native Javascript framework, Heroku cloud platform, Expo universal native apps platform, Electron Javascript framework, Tk GUI (Tkinter)</p>
        </div>
        <div className="box">
          <h3 id="skills">Backend</h3>
          <p>Redis, PostgreSQL, Spark for Java, REST API</p>
        </div>
        <div className="box">
          <h3 id="skills">Technologies</h3>
          <p>Visual Studio Code, Postman, Vim, Selenium, GNU Project Debugger, Maven</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
