import React, {useEffect, useState} from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimensions'
import StyledProjects from './StyledProjects'
import ProjectCard from '../ProjectCard/ProjectCard'
import {useSpring, animated} from 'react-spring'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

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
    const shootingTraining={
        name:'Electronic system for shooting training',
        description:'[iot] Electronic system used to improve the shooting training using infrared tecnology.',
        longDescription:`Consist in a embedded system for shooting training using Infrared (IR) technology to  replace the classic training equipment for electronic equipment.

        Has two parts:
        IR Receptor
        Consist in a simile of bulletproof vest with IR receptors to receive the impact of the light beam sended by the IR emitter.

        IR Emitter
        Consist in a simile of a assault rifle who send trough the IR emitter a light beam with the shoot signal.
        Also has the microcontroller in charge to read the receptors message and calculate the health of the user in the simulation. Also take count of the "bullet" used. And send the training data through bluetooth.`
    }

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
                        {(type==='iot')?
                        <ProjectCard colorScheme={colorScheme} project={shootingTraining}/>
                        :
                        <span></span>}
                    </div>
                </div>
                <Footer/>
            </StyledProjects>
        </animated.div>

    );
}

export default Projects;