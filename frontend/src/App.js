import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/SignUp";
import Home from "./Components/Home"
import Create from "./Components/Create"
import Read from "./Components/Read"
import Update from "./Components/Update"
import Delete from "./Components/Delete"
import Search from "./Components/Search"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
          <Route path="/delete" element={<Delete />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
