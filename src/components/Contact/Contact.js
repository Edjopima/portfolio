import React from 'react';
import StyledContact from './StyledContact'
import GitHub from '../../icons/github.svg'
import Instagram from '../../icons/instagram.png'
import LinkedIn from '../../icons/linkedin.svg'
import Twitter from '../../icons/Twitter.svg'

const Contact = () => {
    return(
        <StyledContact>
            <h1 className='Contact-title'>Contact Me</h1>
            <input type="text" placeholder="EMAIL" className="Contact-input"></input>
            <input type="text" placeholder="SUBJECT" className="Contact-input"></input>
            <textarea placeholder="MESSAGE" className="Contact-input Message"></textarea>
            <div className='Contact-button'><span>Send</span></div>
            <div className='Contact-imageContainer'>
                <img className="Contact-image instagram" src={Instagram} alt="Instagram"/>
                <img className="Contact-image twitter" src={Twitter} alt="Twitter"/>
                <img className="Contact-image" src={LinkedIn} alt="LinkedIn"/>
                <img className="Contact-image" src={GitHub} alt="GitHub"/>
            </div>
        </StyledContact>
    )
};

export default Contact;