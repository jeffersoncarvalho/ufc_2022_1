import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
//import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{paddingLeft:10}}>CRUD</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="navitem">
              <Link to="/page1" className="nav-link">Page 1</Link>
            </li>
            <li className="navitem">
              <Link to="/page2/24" className="nav-link">Page 2</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2/:id" element={<Page2 />} />
      </Routes>
    </div>

  );
}

export default App