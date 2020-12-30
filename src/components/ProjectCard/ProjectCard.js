import React from 'react';
import StyledProjectCard from './StyledProjectCard'
import Github from '../../icons/github.svg'
import GithubWhite from '../../icons/github_white.svg'
import inpimacaApiCover from '../../images/inpimaca-api.jpg'
import inpimacaAppCover from '../../images/inpimaca-app.png'
import inpimacaMobileCover from '../../images/inpimacaMobileApp.jpg'
import grayBackground from '../../images/gray.jpg'
import portfolioCover from '../../images/portfolio.png'
import humiditySensorCover from '../../images/HumiditySensor.png'
import weaponCover from '../../images/weapon.jpg'
import {useHistory} from 'react-router'

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
        case 'humidity-sensor':
            return humiditySensorCover
        case 'Electronic system for shooting training':
            return weaponCover
        default:
            return grayBackground
    }
}

const ProjectCard = ({colorScheme, project}) =>{
    const history = useHistory();

    const changePage = (route) => {
        history.push(route)
    }

    const imageSrc = setImageSrc(project);
    if (project.name === 'Electronic system for shooting training'){
        return (
            <StyledProjectCard colorScheme={colorScheme}>
                <div className='ProjectCard-image'>
                    <img src={imageSrc} alt={project.name} className='ProjectCard-image'/>
                </div>
                <div className='ProjectCard-contentContainer'>
                    <div className='ProjectCard-titleContainer'>
                        <span className='ProjectCard-titleSmall'>{project.name}</span>
                    </div>
                    <p className='ProjectCard-descriptionSmall'>{project.description.slice(5,-1)}</p>
                    <div className='ProjectCard-buttonContainer'>
                        <div className='ProjectCard-button2' onClick={()=>changePage('/shootingTrainingSystem')}>
                            <span className='ProjectCard-buttonText'>More</span>
                        </div>
                    </div>
                </div>
            </StyledProjectCard>
        )
    }
    return(
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
    );
}

export default ProjectCard;