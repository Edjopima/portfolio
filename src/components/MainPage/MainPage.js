import React from 'react';
import StyledMainPage from './StyledMainPage'
import useWindowDimensions from '../../Hooks/useWindowDimensions'
import {useHistory} from 'react-router-dom';


const MainPage = () => {
    const history = useHistory();

    const changePage = (page) => {
        history.push(page);
    }

    const {height}= useWindowDimensions();
    return(
        <StyledMainPage height={height}>
            <div className="mainPage-white">
                <span className='MainPage-title'>let's make your</span>
                <span className='MainPage-text'>electronic engineer, iot</span>
            </div>
            <div className='mainPage-blue'>
                <span className='MainPage-title'>projects alive</span>
                <span className='MainPage-text'>and fullstack developer</span>
            </div>
            <div className="mainPage-white MainPage-buttonContainer" onClick={()=>changePage('/projects')}>
                <span className='MainPage-button'>electronic and iot projects</span>
            </div>
            <div className='mainPage-blue MainPage-buttonContainer' onClick={()=>changePage('/projects')}>
                <span className='MainPage-button'>web and mobile projects</span>
            </div>
        </StyledMainPage>
    );
}

export default MainPage;