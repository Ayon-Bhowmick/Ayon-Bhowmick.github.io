import * as React from "react"
import "../styles/global.scss"
import Title from "./title"
import "../styles/connect.scss"


const Connect = () => {
  return (
    <>
      <div className="body">
        <div className="title-container">
          <Title name={"Connect"} />
        </div>
        <div className="info-container">
          <div className="conBox">
            <button className="btn">Resume</button>
            <p className="conText">AyonBhowmick-Resume.pdf</p>
            <button className="btn">Email</button>
            <button className="btn">LinkedIn</button>
            <button className="btn">GitHub</button>
            <button className="btn">DevPost</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Connect
