import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Using icons for the toggle button
import "./Navbar.css";

const Navbar = () => {
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
        <Link to="home" smooth={true} onClick={toggleNavbar}>
          <h5>Home</h5>
        </Link>
        <Link to="skill" smooth={true} onClick={toggleNavbar}>
          <h5>Skill</h5>
        </Link>
        <Link to="about" smooth={true} onClick={toggleNavbar}>
          <h5>About</h5>
        </Link>
        <Link to="project" smooth={true} onClick={toggleNavbar}>
          <h5>Project</h5>
        </Link>
        <Link to="contact" smooth={true} onClick={toggleNavbar}>
          <h5>Contact Me</h5>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
