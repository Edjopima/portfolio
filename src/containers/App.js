import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import MainPage from '../components/MainPage/MainPage';
import Projects from '../components/Projects/Projects';
import useWindowDimensions from '../Hooks/useWindowDimensions'
import Contact from '../components/Contact/Contact';
import AboutMe from '../components/AboutMe/AboutMe';

const App = () => {
  const {height,width}= useWindowDimensions();
  return (
    <div className='app' height={height} width={width} >
      <Header/>
{/*       <MainPage/>
      <Projects/>
      <Contact/> */}
      <AboutMe/>
    </div>
  );
}

export default App;
