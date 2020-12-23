import React, { useContext } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {__RouterContext} from 'react-router'
import { useTransition, animated } from 'react-spring'
import Header from '../components/Header/Header';
import GlobalStyle from './GlobalStyle';
import MainPage from '../components/MainPage/MainPage';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import AboutMe from '../components/AboutMe/AboutMe';
import {Provider, useSelector} from 'react-redux';
import {createStore} from 'redux';


const Animations = () => {
    const {location} = useContext(__RouterContext);
    const store = useSelector((state)=>state);
    console.log(store);

    const transitionsLeftToRight = useTransition(location, location => location.pathname,{
      from:{opacity:0, transform:'translate(-100%,0'},
      enter:{opacity:1, transform:'translate(0%,0'},
      leave:{opacity:0, transform:'translate(100%,0)'}
    });
  
    const transitionsRightToLeft = useTransition(location, location => location.pathname,{
      from:{opacity:0, transform:'translate(100%,0'},
      enter:{opacity:1, transform:'translate(0%,0'},
      leave:{opacity:0, transform:'translate(-100%,0)'}
    })
    return(
        <>
        <GlobalStyle colorScheme={{backgroundColor:'white',color:'var(--blue)'}}/>
          <Header />
          {transitionsLeftToRight.map(({item,props,key})=>(
              <animated.div key={key} style={props}>
                <Switch location={item}>
                  <Route path="/iotprojects">
                      <Projects type='iot'/>
                  </Route>
                  <Route path='/webprojects'>
                      <Projects type='web'/>
                  </Route>
                  <Route path="/contact">
                      <Contact />
                  </Route>
                  <Route path="/about">
                      <AboutMe />
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

export default Animations;