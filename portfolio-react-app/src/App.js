import React from 'react';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Tools from './components/tools/tools';
import Skills from './components/skills/skills';
import YouTube from "./components/youtube/youtube";
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import './app.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Tools />
      <YouTube />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;