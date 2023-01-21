import * as React from "react"
import "../styles/global.scss"
import StartPage  from "./start"
import Education from "./education"
import Skills from "./skills"
import Experience from "./experience"
import Projects from "./projects"
import Connect from "./connect"

const IndexPage = () => {
  return (
    <>
      <StartPage />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Connect />
    </>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Ayon Bhowmick</title>
    </>
  )
}
