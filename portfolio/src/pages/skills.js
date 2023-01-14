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
          <h3 id="skills">Technologies/Frameworks/Libraries</h3>
          <p>PyTorch, NumPy, OpenCV, Machine Learning, Computer Vision,  React.js, Next.js, Material UI library, Node.js, Gatsby, HTML5/CSS, Sass, Heroku cloud platform, Git (GitHub, Bitbucket, and GitLab), Trello, Agile development, Software design pattern, React-Native Javascript framework, Expo universal native apps platform, Electron Javascript framework, Tk GUI (Tkinter), Redis, PostgreSQL, REST API, Spark for Java, Visual Studio Code, Postman, Vim, Selenium, GNU Project Debugger, Maven</p>
        </div>
        <div className="box">
          <h3 id="skills">Soft Skills</h3>
          <p>Bengali, Creative problem solving, Communication and presentation, Quick learner, Inquisitive, Organized and neat</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
