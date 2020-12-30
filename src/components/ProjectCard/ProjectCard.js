import React from 'react';
import StyledProjectCard from './StyledProjectCard'
import Github from '../../icons/github.svg'
import GithubWhite from '../../icons/github_white.svg'
import inpimacaApiCover from '../../images/inpimaca-api.jpg'
import inpimacaAppCover from '../../images/inpimaca-app.png'
import inpimacaMobileCover from '../../images/inpimacaMobileApp.jpg'
import grayBackground from '../../images/gray.jpg'
import portfolioCover from '../../images/portfolio.png'

const setImageSrc = (project) => {
    switch (project.name) {
        case 'inpimaca-api':
            return inpimacaApiCover
        case 'inpimaca-app':
            return inpimacaAppCover
        case 'inpimacaMobileApp':
            return inpimacaMobileCover
        case 'portfolio':
            return portfolioCover
        default:
            return grayBackground
    }
}

const ProjectCard = ({colorScheme, project}) =>{
    const imageSrc = setImageSrc(project);
    return (
        <StyledProjectCard colorScheme={colorScheme}>
            <div className='ProjectCard-image'>
                <img src={imageSrc} alt={project.name} className='ProjectCard-image'/>
            </div>
            <div className='ProjectCard-contentContainer'>
                <span className='ProjectCard-title'>{project.name}</span>
                <p className='ProjectCard-description'>{project.description.slice(5,-1)}</p>
                <div className='ProjectCard-buttonContainer'>
                    <a href={project.html_url} className='ProjectCard-link'>
                    <div className='ProjectCard-button2'>
                        <img src={(colorScheme.backgroundColor==='white')?Github:GithubWhite} alt='Github Logo' width='25px' height='25px' color='var(--blue)'/>
                        <span className='ProjectCard-buttonText'>View on Github</span>
                    </div>
                    </a>
                </div>
            </div>
        </StyledProjectCard>
    )
}

export default ProjectCard;