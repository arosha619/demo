import React from "react";
import "./App.css";
import "./components/home-page/Home.css";
import Sidebar from "./components/side-bar/Sidebar";
import Home from "./components/home-page/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Purchase from "./components/purchase/Purchase";

function App() {
  return (
    <div className="App">

      
      <div className="sidebar" >
      <Sidebar />
      </div>
    
      <div className="contentarea">
      <Router>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/purchase" element={<Purchase/>} />
          </Routes>
        </Router>
      </div>
  
    </div>
    
  );
}

export default App;
