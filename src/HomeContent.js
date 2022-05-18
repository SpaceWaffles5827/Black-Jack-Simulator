import "./HomeContent.css"
import Project from "./Project";

function HomeContent() {
    return (
      <div className="HomeContent">
        <div className="Intro">
          <h1>Hey! I am Jack.</h1>
          <h1>A front end web developer.</h1>
        </div>
        <div className="Row2">
          <div className="Projects">
            <h2>&#60;Projects&#62;</h2>
              <div className="project1">
                <h1>Project 1</h1>
              </div>
              <div className="project2">
                <h1>Project 2</h1>
              </div>
              <div className="project3">
                <h1>Project 3</h1>
              </div>
              <div className="project4">
                <h1>Project 4</h1>
              </div>
              <h2>&#60;Projects&#62;</h2>
            </div>
            <div className="Things">
            <h1>Row 2 idk</h1>
          </div>
          </div>
        </div>
    );
  }
  
  export default HomeContent;
