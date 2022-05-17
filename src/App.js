import { useState, useEffect } from "react"
import BlackJack from "./BlackJack";
import Home from "./Home";
import "./App.css"
import {Route ,BrowserRouter as Router, Routes} from "react-router-dom"

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/blackjack" element={<BlackJack></BlackJack>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;