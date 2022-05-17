import React from "react"
import {Howl} from "howler"

var music = new Howl({src: "./websiteMusic.mp3"})


function BackGroundMusic() {

    function dahSound(){
        // music.play()
    }

    return (
      <div className="BackGroundMusic">
          {dahSound()}
      </div>
    )
  }
  
  export default BackGroundMusic;
  
