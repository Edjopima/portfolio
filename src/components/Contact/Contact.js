import React, {useState} from 'react';
import StyledContact from './StyledContact'
import GitHub from '../../icons/github.svg'
import Instagram from '../../icons/instagram.png'
import LinkedIn from '../../icons/linkedin.svg'
import Twitter from '../../icons/Twitter.svg'
import Header from '../Header/Header';
import {useSpring, animated} from 'react-spring'

const Contact = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if ( email === '' || subject === '' || message === '' ){
            setError('all fields are required');
        } else{
            setError('');
        }
    }

    const props = useSpring({
        from:{transform:'translate(-100%,0'},
        to:{transform:'translate(0%,0'}
        });

    return(
        <animated.div style={props}>
            <StyledContact>
                <Header/>
                <div className="Contact">
                    <h1 className='Contact-title'>Contact Me</h1>
                    <input type="text" placeholder="EMAIL" className="Contact-input" onChange={(event)=>setEmail(event.target.value)} ></input>
                    <input type="text" placeholder="SUBJECT" className="Contact-input" onChange={(event) => setSubject(event.target.value)} ></input>
                    <textarea placeholder="MESSAGE" className="Contact-input Message" onChange={(event) => setMessage(event.target.value)} ></textarea>
                    <p className='Contact-errorText'>{error}</p>
                    <div className='Contact-button' onClick={()=>handleSubmit()}><span>Send</span></div>
                    <div className='Contact-imageContainer'>
                        <a href='https://www.instagram.com/edjopima/'> <img className="Contact-image instagram" src={Instagram} alt="Instagram"/></a>
                        <a href='https://twitter.com/edjopima'> <img className="Contact-image twitter" src={Twitter} alt="Twitter"/></a>
                        <a href='https://www.linkedin.com/in/edjopima/'> <img className="Contact-image" src={LinkedIn} alt="LinkedIn"/></a>
                        <a href='https://github.com/edjopima'> <img className="Contact-image" src={GitHub} alt="GitHub"/></a>
                    </div>
                </div>
            </StyledContact>
        </animated.div>
    )
};

export default Contact;