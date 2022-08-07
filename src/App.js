import NavbarTop from './components/Navbar';
import './App.css';
import Banner from './components/Banner';
import Skills from './components/Skills'
import Projects from './components/Projects';
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">
        <AnimatedCursor innerSize={15} outerSize={5} innerScale={1}/>
      <NavbarTop/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
