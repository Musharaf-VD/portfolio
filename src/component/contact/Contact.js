import { Element } from 'react-scroll'
import './Contact.css'
import contactimg from '../asset/contactpic.png';
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

const Contact = () => {
    return (
        <Element id='contact'>
            <div className='contact-container'>
                <div className='contactheading-container'>
                    <h2>Contact</h2>
                </div>

                <div className='contactdetail-container'>
                    <div className='contactimg-container'>
                        <img src={contactimg} alt='contact pic' />
                    </div>

                    <div className='contactform-container'>
                        <div className='input-name'>
                            <label>Name</label>
                            <input />
                        </div>

                        <div className='input-email'>
                            <label>Email</label>
                            <input />
                        </div>

                        <div className='input-mobile'>
                            <label>Mobile No</label>
                            <input />
                        </div>

                        <div className='submit-button'>
                            <button className='btn col-12'>submit</button>
                        </div>

                    </div>
                    <div className='socialmedia-container1'>
                        <a href='https://www.instagram.com/fara__hsum?igsh=M3FtZzc3ajQ1NWVz&utm_source=ig_contact_invite' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
                        <a href='https://github.com/Musharaf-VD' target='_blank' rel='noopener noreferrer'><FiGithub /></a>
                        <a href='https://www.linkedin.com/in/musharaf0803' target='_blank' rel='noopener noreferrer'><FaLinkedinIn /></a>
                        <a href="https://wa.me/918148130769?text=hi%20Musharaf%20can%20i%20talk%20with%20you" target="_blank" rel="noopener noreferrer"><ImWhatsapp /></a>

                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Contact
