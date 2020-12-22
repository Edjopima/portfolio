import React from 'react';
import StyledAboutMe from './StyledAboutMe';
import useWindowDimensions from '../../Hooks/useWindowDimensions'
import {useHistory} from 'react-router-dom'

const AboutMe = () =>{
    const {height}= useWindowDimensions();
    const history = useHistory();
    const changePage = (page) => {
        history.push(page);
    }
    return (
        <StyledAboutMe height={height}>
            <div className='aboutMe-white'>
                <h1 className='aboutMe-title'>Hi, i'm <span className='aboutMe-name'>eduardo piña</span></h1>
                <span className='aboutMe-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                <div className='aboutMe-buttonContainer'>
                    <div className='aboutMe-button1' onClick={()=>changePage('/projects')}>
                        <span>Projects</span>
                    </div>
                    <div className='aboutMe-button2' onClick={()=>changePage('/contact')}>
                        <span>contact me</span>
                    </div>
                </div>
            </div>
            <div className='aboutMe-blue'></div>
        </StyledAboutMe>
    )
}

export default AboutMe;