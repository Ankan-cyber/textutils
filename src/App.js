import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" />
      <Routes>
        <Route exact path='/' element={<Textform heading ="Enter Text To Analyze Below"/>} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
