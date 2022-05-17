import { useState, useEffect } from "react"
import BackGroundMusic from "./BackGroundMusic";
import "./NavBar.css"

function NavBar() {
  return (
    <div className="NavBar">
        <div className="AllText"> 
            <div className="Text">
                <a href="./">
                    <h1>Home</h1>
                </a>
            </div>
            <div className="Text">
                <a href="./about">
                    <h1>About</h1>
                </a>
            </div>
            <div className="Text">
                <a href="./blackjack">
                    <h1>BlackJack</h1>
                </a>
            </div>
            <div className="Volume">
                <BackGroundMusic></BackGroundMusic>
            </div>
        </div>
    </div>
  );
}

export default NavBar;