import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { NavBar } from "./components/NavBar";

const App = () => {
  
    return (
    <>
      <NavBar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/MRD090924" element={<About/>}/>
        </Routes>
      </div>

      </>
  );
};
export default App;
