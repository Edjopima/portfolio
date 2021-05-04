import React from 'react';
import StyledAboutMe from './StyledAboutMe';
import useWindowDimensions from '../../Hooks/useWindowDimensions'
import {useHistory} from 'react-router-dom'
import Header from '../Header/Header'
import Profile from '../../images/profile.jpg'
import Footer from '../Footer/Footer';

const AboutMe = () =>{
    const {height}= useWindowDimensions();
    const history = useHistory();
    const changePage = (page) => {
        history.push(page);
    }
    return (
        <StyledAboutMe height={height}>
            <Header />
            <div className='aboutMe'>
                <div className='aboutMe-white'>
                    <h1 className='aboutMe-title'>Hi, i'm <span className='aboutMe-name'>eduardo piña</span></h1>
                    <span className='aboutMe-text'>
                    I'm a venezuelan electronic engineer, pasionate for technology, the automation and the Internet of Things.
                    I have experience with Javascript using NodeJS, ReactJS, React Native and Electron JS;
                    also, i have worked with Python, C and C++ in Electronics and Internet of Things projects
                    using Microcontrollers like arduino, PIC and single boards computers like raspberry pi.
                    </span>
                    <div className='aboutMe-buttonContainer'>
                        <div className='aboutMe-button1' onClick={()=>changePage('/projects')}>
                            <span>Projects</span>
                        </div>
                        <div className='aboutMe-button2' onClick={()=>changePage('/contact')}>
                            <span>contact me</span>
                        </div>
                    </div>
                </div>
                <div className='aboutMe-blue'>
                    <img src={Profile} alt='profile' className='aboutMe-profilePic'/>
                </div>
            </div>
            <Footer/>
        </StyledAboutMe>
    )
}

export default AboutMe;
