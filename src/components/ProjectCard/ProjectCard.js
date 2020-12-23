import React from 'react';
import StyledProjectCard from './StyledProjectCard'
import Github from '../../icons/github.svg'
import { useSelector } from 'react-redux';

const ProjectCard = ({colorScheme}) =>{
    return (
        <StyledProjectCard colorScheme={colorScheme}>
            <div className='ProjectCard-image'></div>
            <div className='ProjectCard-contentContainer'>
                <span className='ProjectCard-title'>Project Title</span>
                <p className='ProjectCard-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <div className='ProjectCard-buttonContainer'>
                    <div className='ProjectCard-button1'>
                        <span>More</span>
                    </div>
                    <div className='ProjectCard-button2'>
                        <img src={Github} atl='Github Logo' width='25px' height='25px' color='var(--blue)'/>
                        <span>View on Github</span>
                    </div>
                </div>
            </div>
        </StyledProjectCard>
    )
}

export default ProjectCard;