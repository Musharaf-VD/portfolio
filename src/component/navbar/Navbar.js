import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Using icons for the toggle button
import "./Navbar.css";

const Navbar = ({handleScrollToSkills}) => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNavbar = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <section className="navigation">
      {/* Toggle Button */}
      
        <div className="nav-toggle" onClick={toggleNavbar}>
          {isNavVisible ? <FaTimes /> : <FaBars />}
        </div>
      

      {/* Navigation Bar */}
      <div className={`nav-bar ${isNavVisible ? "visible" : "hidden"}`}>
        <Link to="home" smooth={true} duration={100}>
          <h5 onClick={handleScrollToSkills}>Home</h5>
        </Link>
        <Link to="skill" smooth={true} duration={100}>
          <h5 onClick={handleScrollToSkills}>Skill</h5>
        </Link>
        <Link to="about" smooth={true}  duration={100}>
          <h5 onClick={handleScrollToSkills}>About</h5>
        </Link>
        <Link to="project" smooth={true}  duration={100}>
          <h5 onClick={handleScrollToSkills}>Project</h5>
        </Link>
        <Link to="contact" smooth={true}  duration={100}>
          <h5 onClick={handleScrollToSkills}>Contact Me</h5>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
