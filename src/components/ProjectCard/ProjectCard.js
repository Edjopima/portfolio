import React from 'react';
import StyledProjectCard from './StyledProjectCard'
import Github from '../../icons/github.svg'
import GithubWhite from '../../icons/github_white.svg'

const ProjectCard = ({colorScheme, project}) =>{
    return (
        <StyledProjectCard colorScheme={colorScheme}>
            <div className='ProjectCard-image'></div>
            <div className='ProjectCard-contentContainer'>
                <span className='ProjectCard-title'>{project.name}</span>
                <p className='ProjectCard-description'>{project.description.slice(5,-1)}</p>
                <div className='ProjectCard-buttonContainer'>
                    <div className='ProjectCard-button2'>
                        <img src={(colorScheme.backgroundColor==='white')?Github:GithubWhite} alt='Github Logo' width='25px' height='25px' color='var(--blue)'/>
                        <span>View on Github</span>
                    </div>
                </div>
            </div>
        </StyledProjectCard>
    )
}

export default ProjectCard;