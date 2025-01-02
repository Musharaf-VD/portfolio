import { Element } from 'react-scroll'
import './Home.css'
import img from '../asset/profilepic.png'
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";



const Home = () => {
const handleDownload = () =>{
  const link = document.createElement("a");
  link.href ="../asset/resume.pdf";
  link.download="resume.pdf";
  link.click();
  
}

  return (
    // 
    <Element id='home'>
      <div className='profile-container'>
        <div className='content-container'>
          <h2>Musharaf VD</h2> 
          <h3>i'm a <span >Fr</span>ontend Develop<span >er</span></h3>
          <div className='socialmedia-container'>
            <a href='https://www.instagram.com/fara__hsum?igsh=M3FtZzc3ajQ1NWVz&utm_source=ig_contact_invite' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
            <a href='https://github.com/Musharaf-VD' target='_blank' rel='noopener noreferrer'><FiGithub /></a>
            <a href='https://www.linkedin.com/in/musharaf0803' target='_blank' rel='noopener noreferrer'><FaLinkedinIn /></a>
            <a href="https://wa.me/918148130769?text=hi%20Musharaf%20can%20i%20talk%20with%20you" target="_blank" rel="noopener noreferrer"><ImWhatsapp /></a>

          </div>
          <button onClick={handleDownload}>download cv</button>
        </div>
        <div className='img-container'>
          <img src={img} />
        </div>
      </div>

    </Element>
  )
}

export default Home