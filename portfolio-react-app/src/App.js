import React from 'react';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Tools from './components/tools/tools';
import Skills from './components/skills/skills';
import Work from "./components/work/work";
import Contact from './components/contact/contact';
import './app.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Tools />
      <Work />
      <Contact />
    </div>
  );
}

export default App;