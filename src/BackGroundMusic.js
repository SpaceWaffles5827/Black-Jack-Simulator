import React, { useState } from "react"
import {Howl} from "howler"
import "./BackGroundMusic.css"

var music = new Howl({src: "./lofi.mp3",autoplay: true, volume: 0.03, loop:true})

function BackGroundMusic() {
  const [musicPlaying, setMusicPLaying] = useState(true)

  function isMusicOn(){
    if(musicPlaying){
      music.play()
    }
    else{
      music.pause()
    }
  }
  
  function whatImageToDisplay(){
    if(!musicPlaying){
      return (<img onClick={()=>setMusicPLaying(!musicPlaying)} src={"./mute.png"} width={100}></img>)
    }
    if(musicPlaying){
      return (<img onClick={()=>setMusicPLaying(!musicPlaying)} src={"./unMute.png"} width={100}></img>)
    }
  }

    return (
      <div className="BackGroundMusic">
          {whatImageToDisplay()}
          {isMusicOn()}
      </div>
    )
  }
  
  export default BackGroundMusic;
  
  // <button onClick={()=>setMusicPLaying(!musicPlaying)}>pause/play</button>
  
