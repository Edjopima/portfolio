import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../components/Header/Header';
import MainPage from '../components/MainPage/MainPage';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import AboutMe from '../components/AboutMe/AboutMe';

const App = () => {

  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/projects">
            <Projects />
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
      </Router>
  );
}

export default App;
