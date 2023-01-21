import * as React from "react"
import "../styles/global.scss"
import Title from "./title"
import "../styles/connect.scss"


const openLink = (link) => {
  return async () => {
    await window.open(link, "_blank")
  }
}

const Connect = () => {
  const downloadResume = () => {
    fetch("AyonBhowmick-Resume.pdf").then(res => {
      res.blob().then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = "AyonBhowmick-Resume.pdf";
        link.click();
      })
    })
  }

  return (
    <>
      <div className="body">
        <div className="title-container">
          <Title name={"Connect"} />
        </div>
        <div className="info-container">
          <div className="conBox">
            <div className="conElement">
              <button className="btn" onClick={downloadResume}>Resume</button>
              <p>AyonBhowmick-Resume.pdf</p>
            </div>
            <div className="conElement">
              <button className="btn" onClick={openLink("mailto:ayonbhowmick2002@gmail.com")}>Email</button>
              <p>ayonbhowmick2002@gmail.com</p>
            </div>
            <div className="conElement">
              <button className="btn" onClick={openLink("https://www.linkedin.com/in/ayon-bhowmick-40685a226/")}>LinkedIn</button>
              <p>linkedin.com/in/ayon-bhowmick-40685a226/</p>
            </div>
            <div className="conElement">
              <button className="btn" onClick={openLink("https://github.com/Ayon-Bhowmick")}>Github</button>
              <p>github.com/Ayon-Bhowmick</p>
            </div>
            <div className="conElement">
              <button className="btn" onClick={openLink("https://devpost.com/ayonbolt")}>DevPost</button>
              <p>devpost.com/ayonbolt</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Connect
