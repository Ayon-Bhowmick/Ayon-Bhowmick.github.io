import * as React from "react"
import "../styles/global.scss"
import StartPage  from "./start"
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
