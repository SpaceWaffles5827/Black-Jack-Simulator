import { useState, useEffect } from "react"
import BlackJack from "./BlackJack";
import Home from "./Home";
import "./App.css"
import {Route ,BrowserRouter as Router, Routes} from "react-router-dom"
import NavBar from "./NavBar";

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/blackjack" element={<><NavBar></NavBar><BlackJack></BlackJack></>}/>
            <Route path="/about" element={<><NavBar></NavBar><h1>About page</h1></>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;