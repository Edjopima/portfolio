import React, { useContext } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {__RouterContext} from 'react-router'
import { useTransition, animated } from 'react-spring'
import Header from '../components/Header/Header';
import MainPage from '../components/MainPage/MainPage';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import AboutMe from '../components/AboutMe/AboutMe';

const App = () => {
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
                  <Route path="/iotprojects">
                      <Projects type='iot'/>
                  </Route>
                  <Route path="/contact">
                      <Contact />
                  </Route>
                  <Route path="/about">
                      <AboutMe />
                  </Route>
                  <Route path='/webprojects'>
                    <Projects type='web'/>
                  </Route>
                  <Route path="/">
                      <MainPage />
                  </Route>
                </Switch>
              </animated.div>
          ))}
    </>
  );
}

export default App;
