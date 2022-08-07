import NavbarTop from './components/Navbar';
import './App.css';
import Banner from './components/Banner';
import Skills from './components/Skills'
import Projects from './components/Projects';
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
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
