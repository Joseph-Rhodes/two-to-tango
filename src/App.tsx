import React, { useState, useEffect, useRef } from "react";
import Board from "./components/board";
import {
  Position,
  generateSequence,
  playLetter,
  checkMatch,
} from "./components/utils/gameLogic";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Header from "./components/Header";
import Signup from "./components/SignUp/Signup";
import Signin from "./components/SignIn/Signin";
import Home from "./components/Home";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/game" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
