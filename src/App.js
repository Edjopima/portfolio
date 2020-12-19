import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import useWindowDimensions from './Hooks/useWindowDimensions'

const App = () => {
  const {height,width}= useWindowDimensions();
  return (
    <div className='app' height={height} width={width} >
      <Header/>
      <MainPage/>
    </div>
  );
}

export default App;
