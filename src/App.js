import "./App.css";
import React from "react"
import MockMan from "mockman-js";
import { Route, Routes } from "react-router";
import  Home  from './pages/home-page/home'
import Review from "./pages/review/review";
import About from "./pages/about/about";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
