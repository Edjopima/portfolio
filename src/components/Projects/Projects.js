import React from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimensions'
import StyledProjects from './StyledProjects'
import ProjectCard from '../ProjectCard/ProjectCard'

const Projects = () => {
    const {height} = useWindowDimensions();

    return(
        <StyledProjects height={height}>
            <div className='Projects-conatiner'>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </StyledProjects>
    );
}

export default Projects;