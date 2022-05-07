import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/**
 * Header
 *
 * ----Home---
 * Slidebar
 * viewer
 * movie list
 * ------------------
 */
