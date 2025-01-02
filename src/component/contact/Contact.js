import { Element } from 'react-scroll'
import './Contact.css'
import contactimg from '../asset/contactpic.png';

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
                </div>
            </div>
        </Element>
    )
}

export default Contact
