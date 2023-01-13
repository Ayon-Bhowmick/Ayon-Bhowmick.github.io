import * as React from "react"
import StartPage  from "./start"
import "../styles/global.scss"
import Education from "./education"
import Skills from "./skills"

const IndexPage = () => {
  return (
    <>
      <StartPage />
      <Education />
      <Skills />
    </>
  )
}

export default IndexPage
