import React,{useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {__RouterContext} from 'react-router'
import StyledHeader from './StyledHeader';

const Header = () => {
    const {location} = useContext(__RouterContext);
    const history = useHistory();
    const changePage = (page) => {
        history.push(page);
    }

    const setComponentProps = (location) =>{
        switch (location) {
            case '/':
                return({
                    colorScheme:{
                        backgroundColor1:'white',
                        backgroundColor2:'var(--blue)',
                        color1:'var(--blue)',
                        color2:'white'
                    },
                    text:{
                        text1:'About me',
                        text2:'contact'
                    },
                    routes:{
                        route1:'/about',
                        route2:'/contact'
                    }
                });
            case '/iotprojects':
                return({
                    colorScheme:{
                        backgroundColor1:'white',
                        backgroundColor2:'white',
                        color1:'var(--blue)',
                        color2:'var(--blue)'
                    },
                    text:{
                        text1:'About me',
                        text2:'contact'
                    },
                    routes:{
                        route1:'/about',
                        route2:'/contact'
                    }
                });
            case '/webprojects':
                return({
                    colorScheme:{
                        backgroundColor1:'var(--blue)',
                        backgroundColor2:'var(--blue)',
                        color1:'white',
                        color2:'white'
                    },
                    text:{
                        text1:'About me',
                        text2:'contact'
                    },
                    routes:{
                        route1:'/about',
                        route2:'/contact'
                    }
                });
            case '/about':
                return({
                    colorScheme:{
                        backgroundColor1:'white',
                        backgroundColor2:'var(--blue)',
                        color1:'var(--blue)',
                        color2:'white'
                    },
                    text:{
                        text1:'Projects',
                        text2:'contact'
                    },
                    routes:{
                        route1:'/',
                        route2:'/contact'
                    }
                });
            case '/contact':
            return({
                colorScheme:{
                    backgroundColor1:'white',
                    backgroundColor2:'white',
                    color1:'var(--blue)',
                    color2:'var(--blue)'
                },
                text:{
                    text1:'projects',
                    text2:'about me'
                },
                routes:{
                    route1:'/',
                    route2:'/about'
                }
            });
            default:
                return({
                    colorScheme:{
                        backgroundColor1:'white',
                        backgroundColor2:'var(--blue)',
                        color1:'var(--blue)',
                        color2:'white'
                    },
                    text:{
                        text1:'About me',
                        text2:'contact'
                    },
                    routes:{
                        route1:'/about',
                        route2:'/contact'
                    }
                });
        }
    }

    const {text,routes,colorScheme} = setComponentProps(location.pathname)

    return (
            <StyledHeader colorScheme={colorScheme}>
                <div className='header-name' >
                    <span className='header-text' onClick={()=>changePage('/')}>Eduardo Piña</span>
                </div>
                <div className='header-options'>
                    <span className='header-text' onClick={()=>changePage(routes.route1)}>{text.text1}</span>
                    <span className='header-text' onClick={()=>changePage(routes.route2)}>{text.text2}</span>
                </div>
            </StyledHeader>
    );
};

export default Header;