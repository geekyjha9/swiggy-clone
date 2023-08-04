import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./componants/Header";
import Contact from "./componants/Contact";
import About from "./componants/About";
import Body from "./componants/Body";
import RestaurentMenu from "./componants/RestaurentMenu"

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Body />} />
          <Route path="/restaurent/:resId" element={<RestaurentMenu />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
