import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/ContactUS";
import Footer from "./components/Footer";
function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
