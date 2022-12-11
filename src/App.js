import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Textform from './components/Textform'

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
      <Navbar title="TextUtils" aboutText="About" theme={theme} toggleTheme={toggleTheme} />
      <Textform heading="Enter Text To Analyze Below" theme={theme} />
    </>
  );
}

export default App;
