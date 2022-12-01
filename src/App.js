import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Textform from './components/Textform'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  let startUpTheme;
  if (localStorage.getItem("Theme") == null) {
    startUpTheme = "light";
  }
  else {
    startUpTheme = localStorage.getItem("Theme")
  }

  const [theme, setTheme] = useState(startUpTheme)

  function toggleTheme() {
    if (theme === 'light') {
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white'
      setTheme('dark')
      localStorage.setItem("Theme", "dark");
    }
    else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
      setTheme('light')
      localStorage.setItem("Theme", "light");
    }

  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route excact path='/' element={<Textform heading="Enter Text To Analyze Below" theme={theme} />}></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
