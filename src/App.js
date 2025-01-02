
import './App.css';
import Home from './component/Homes/Home';
import Navbar from './component/navbar/Navbar';
import Skill from './component/skill/Skill';
import About from './component/about/About';
import Project from './component/projectss/Project';
import Contact from './component/contact/Contact';

function App() {
  return (
    <div className ="my-portfolio">
     <Navbar/>
     <Home/>
     <Skill/>
     <About/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;
