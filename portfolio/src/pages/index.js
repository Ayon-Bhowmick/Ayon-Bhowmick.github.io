import * as React from "react"
import StartPage  from "./start"
import "../styles/global.scss"
import Education from "./education"
import Skills from "./skills"
import Experience from "./experience"
import Projects from "./projects"

const IndexPage = () => {
  return (
    <>
      <StartPage />
      <Education />
      <Skills />
      <Experience />
      <Projects />
    </>
  )
}

export default IndexPage
