import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center">
        <BrowserRouter>
          <h1>React-Router-ComponentRoutingApp</h1>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
