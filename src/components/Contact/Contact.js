import React, {useState} from 'react';
import StyledContact from './StyledContact'
import GitHub from '../../icons/github.svg'
import Instagram from '../../icons/instagram.png'
import LinkedIn from '../../icons/linkedin.svg'
import Twitter from '../../icons/Twitter.svg'
import Header from '../Header/Header';
import {useSpring, animated} from 'react-spring'
import Footer from '../Footer/Footer';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [messageStatus, setMessageStatus] = useState('Send');

    const handleSubmit = () => {
        if ( name === '' || email === '' || subject === '' || message === '' ){
            setError('all fields are required');
        } else{
            setError('');
            setMessageStatus('Sending...');
            fetch('https://portfolio-server-nodemailer.herokuapp.com/sendMail', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message
                })
            })
            .then(response => response.json())
            .then(data=>setMessageStatus('message sent'))
            .catch(error => console.error('error'));
        }
    }

    const clearMessage = () =>{
        setEmail('');
        setName('');
        setMessage('');
        setSubject('');
        setMessageStatus('Send');
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
                    <input type="text" placeholder="NAME" className="Contact-input" value={name} onChange={(event)=>setName(event.target.value)} ></input>
                    <input type="text" placeholder="EMAIL" className="Contact-input" value={email} onChange={(event)=>setEmail(event.target.value)} ></input>
                    <input type="text" placeholder="SUBJECT" className="Contact-input" value={subject} onChange={(event) => setSubject(event.target.value)} ></input>
                    <textarea placeholder="MESSAGE" className="Contact-input Message" value={message} onChange={(event) => setMessage(event.target.value)} ></textarea>
                    <p className='Contact-errorText'>{error}</p>
                    <div className='Contact-buttonContainer'>
                        <div className='Contact-button' onClick={()=>handleSubmit()}><span>{messageStatus}</span></div>
                        <div className='Contact-button2' onClick={()=>clearMessage()}><span>Clear</span></div>
                    </div>
                    <div className='Contact-imageContainer'>
                        <a href='https://www.instagram.com/edjopima/'> <img className="Contact-image instagram" src={Instagram} alt="Instagram" target="_blank" rel="noreferrer"/></a>
                        <a href='https://twitter.com/edjopima'> <img className="Contact-image twitter" src={Twitter} alt="Twitter" target="_blank" rel="noreferrer"/></a>
                        <a href='https://www.linkedin.com/in/edjopima/'> <img className="Contact-image" src={LinkedIn} alt="LinkedIn" target="_blank" rel="noreferrer"/></a>
                        <a href='https://github.com/edjopima'> <img className="Contact-image" src={GitHub} alt="GitHub" target="_blank" rel="noreferrer"/></a>
                    </div>
                </div>
                <br></br>
                <br></br>
                <Footer/>
            </StyledContact>
        </animated.div>
    )
};

export default Contact;
