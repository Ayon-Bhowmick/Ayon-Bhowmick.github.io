import * as React from "react"
import "../styles/projects.scss"
import "../styles/global.scss"
import Title from "./title"


const Projects = () => {
  return (
    <div className="body">
      <div className="title-container">
        <Title name={"Projects"} />
      </div>
      <div className="info-container" id="projectInfo">
        <div className="box" >
          <h3 id="projects">MNIST Classification Neural Network without ML Libraries</h3>
          <p className="sub">December 2022</p>
          <p>I developed a multilayer perceptron neural network to classify handwritten digits without using any machine learning libraries. This model had an accuracy of 0.96. I trained the model on the MNIST dataset and used the Numpy library for linear algebra.</p>
        </div>
        <div className="box">
          <h3 id="projects">Genre Classification</h3>
          <p className="sub">November - December 2022</p>
          <p>I classified songs into 6 genres using features provided by the Spotify API. The model had an accuracy of 0.51. I used a random forest model made in R.</p>
        </div>
        <div className="box">
          <h3 id="projects">Anonymize</h3>
          <p className="sub">October 2022</p>
          <p>I implemented a real-time face blurring software with Gaussian blur, pixelation and blackout methods of obscuration. I used OpenCV for facial detection and masking effects.</p>
        </div>
        <div className="box">
          <h3 id="projects">Violet Light</h3>
          <p className="sub">February 2022</p>
          <p>For the 24 hour HackViolet Hackathon I developed a mobile app that enables users to check in with their friends while at parties. The app was built in React-Native and the backend was built using Next.js with a Redis database.</p>
        </div>
        <div className="box">
          <h3 id="projects">Sus Foods</h3>
          <p className="sub">November 2021</p>
          <p>For the 24 hour HackHolyoke Hackathon I made a web app which tracks the expiration dates of your perishables and reminds you when they are going to go bad. This app won the Best Sustainability Hack. The app was made in React.js and styled using Material UI.</p>
        </div>
        <div className="box">
          <h3 id="projects">The Buzz</h3>
          <p className="sub">September - December 2021</p>
          <p>I created a full stack social media app including web and mobile front-ends, server backend, and admin cli. The backend was made in Java using the Spark framework and used a PostgreSQL database. Web and mobile front-ends were written in Typescript using React and React-Native respectively with Material UI. This was developed with a 5 person team using Scrum methodology.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
