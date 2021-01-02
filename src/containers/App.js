import React, { useContext,useEffect, useState} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {__RouterContext} from 'react-router'
import { useTransition, animated } from 'react-spring'
import MainPage from '../components/MainPage/MainPage';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import AboutMe from '../components/AboutMe/AboutMe';
import {useSelector,useDispatch} from 'react-redux'
import ShotingTrainingSystem from '../components/ShotingTrainingSystem/ShotingTrainingSystem';

const App = () => {
  const projects = useSelector(state=>state.projects);
  const dispatch = useDispatch();
  console.log(projects)
  useEffect(()=>{
    fetch('https://api.github.com/users/Edjopima/repos')
      .then(response=>response.json())
      .then(data=>{
        dispatch({
          type:'SET_PROJECTS',
          payload:data
        })
      })
      .catch(error=>console.log(error));
  },[]);

  const filterIotProjects = (projects) => {
    let iotProjects = [];
    projects.forEach(project=>{
      if (project.description.slice(0,5)=== '[iot]'){
        iotProjects.push(project);
      }
    })
    return (iotProjects);
  }

  const filterWebProjects = (projects) => {
    let webProjects = [];
    projects.forEach(project=>{
      if (project.description.slice(0,5)=== '[web]'){
        webProjects.push(project);
      }
    })
    return (webProjects)
  }
  const {location} = useContext(__RouterContext);

  const transitionsLeftToRight = useTransition(location, location => location.pathname,{
    from:{opacity:0},
    enter:{opacity:1},
    leave:{opacity:0}
  });


  return (
    <>
          {transitionsLeftToRight.map(({item,props,key})=>(
              <animated.div key={key} style={props}>
                <Switch location={item}>
                  <Route path="/portfolio/iotprojects">
                      <Projects type='iot' projects={filterIotProjects(projects)}/>
                  </Route>
                  <Route path='/portfolio/shootingTrainingSystem'>
                    <ShotingTrainingSystem/>
                  </Route>
                  <Route path="/portfolio/contact">
                      <Contact />
                  </Route>
                  <Route path="/portfolio/about">
                      <AboutMe />
                  </Route>
                  <Route path='/portfolio/webprojects'>
                    <Projects type='web' projects={filterWebProjects(projects)}/>
                  </Route>
                  <Route path="/portfolio">
                      <MainPage />
                  </Route>
                </Switch>
              </animated.div>
          ))}
    </>
  );
}

export default App;
