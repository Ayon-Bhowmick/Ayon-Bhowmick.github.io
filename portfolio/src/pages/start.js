import * as React from "react"
import "../styles/start.scss"
import "../styles/global.scss"


const StartPage = () => {
  return (
    <div className="body" id="startBody">
      <h1 className="startTitle">Ayon Bhowmick</h1>
      <div className="startLine" id="red"/>
      <div className="startBar" id="red"/>
      <p id="startInfo">Hi, I'm Ayon. I am a junior at Lehigh University majoring in computer science with a minor in data science. I have experience in data science, machine learning, and web development. I am looking for a summer internship where I can apply my knowledge of programming and problem-solving skills to real-world challenges, and gain valuable hands-on experience in the industry.</p>
      <div className="startBox"/>
    </div>
  )
}

export default StartPage
