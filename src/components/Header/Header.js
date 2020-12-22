import React from 'react';
import {useHistory} from 'react-router-dom';
import './Header.css'

const Header = () => {
    const history = useHistory();
    const changePage = (page) => {
        history.push(page);
    }
    return (
        <div className='header'>
            <div className='header-name' onClick={()=>changePage('/')}>
                <span className='header-text' >Eduardo Piña</span>
            </div>
            <div className='header-options'>
                <span className='header-text' onClick={()=>changePage('/about')}>About me</span>
                <span className='header-text' onClick={()=>changePage('/contact')}>Contact</span>
            </div>
        </div>
    );
};

export default Header;