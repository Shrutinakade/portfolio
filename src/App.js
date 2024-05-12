 import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialIcon from './components/SocialIcon';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer'
 
function App() {
  return (<>
    <Navbar />
    <Home />
    <SocialIcon/>
    <About/>
    <Project/>
    <Contact/>
    <Footer/>
  </>
  );
}

export default App;
