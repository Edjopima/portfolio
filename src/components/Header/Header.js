import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-name'>
                <span className='header-text'>Eduardo Piña</span>
            </div>
            <div className='header-options'>
                <span className='header-text'>About me</span>
                <span className='header-text'>Contact</span>
            </div>
        </div>
    );
};

export default Header;