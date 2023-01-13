import * as React from "react"
import "../styles/skills.scss"
import "../styles/global.scss"


const Skills = () => {
  return (
    <div className="body">
      <div className="title-container">
        <h1>Skills</h1>
      </div>
      <div className="info-container">
        <div className="box" id="languages">
          <h3>Languages</h3>
          <p>Python, Java, Javascript/Typescript, C, Rust, R, x86 Assembly, SQL</p>
        </div>
        <div className="box" id="frameworks">
          <h3>Frameworks</h3>
          <p>PyTorch, NumPy, OpenCV, Machine Learning, Computer Vision,  React.js, Next.js, Material UI library, Node.js, HTML5/CSS, Sass, Heroku cloud platform, Git (GitHub, Bitbucket, and GitLab), Trello, Agile development, Software design pattern, React-Native Javascript framework, Expo universal native apps platform, Electron Javascript framework, Tk GUI (Tkinter), Redis, PostgreSQL, REST API, Spark for Java, Visual Studio Code, Postman, Vim, Selenium, GNU Project Debugger, Maven</p>
        </div>
        <div className="box" id="soft">
          <h3>Soft Skills</h3>
          <p>Bengali, Creative problem solving, Communication and presentation, Quick learner, Inquisitive, Organized and neat</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
