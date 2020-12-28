import React, {useEffect, useState} from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimensions'
import StyledProjects from './StyledProjects'
import ProjectCard from '../ProjectCard/ProjectCard'
import {useSpring, animated} from 'react-spring'
import Header from '../Header/Header'

const Projects = ({type, projects}) => {
    console.log(projects);
    const [projectList,setProjectList] = useState([])

    useEffect(()=>{
        setProjectList(projects);
        console.log(projectList);
    }, [projects]);
    let colorScheme= (type==='iot')?{backgroundColor:'white',color:'var(--blue)'}: {backgroundColor:'var(--blue)',color:'white'};
    const {height} = useWindowDimensions();
    const setAnimationProps = () =>{
        if (type==='iot'){
            return({
                from:{transform:'translate(-100%,0'},
                to:{transform:'translate(0%,0'}
                })
        }
        return ({
            from:{transform:'translate(100%,0'},
            to:{transform:'translate(0%,0'}
            })
    }
    const props = useSpring(setAnimationProps())

    return(
        <animated.div style={props}>
            <StyledProjects height={height} colorScheme={colorScheme}>
                <Header />
                <div className='Projects'>
                    <div className='Projects-conatiner'>
                        {projectList.map((item)=>{
                            console.log(item);
                            return (<ProjectCard colorScheme={colorScheme} project={item}/>);
                            }
                        )}
                    </div>
                </div>
            </StyledProjects>
        </animated.div>

    );
}

export default Projects;