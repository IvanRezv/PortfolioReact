import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from './components/skills/skills';
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
import Progress2 from "./components/progress2/progress";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Progress2 />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
