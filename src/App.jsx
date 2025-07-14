import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Education from './Education';
import Contact from './Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Navbar />
      <Profile />
    <About />
  <Skills />
  <Project />
  <Education />
  <Contact />
    </>
  );
}

export default App;
