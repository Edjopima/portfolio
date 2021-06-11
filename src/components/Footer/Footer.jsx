import React,{useContext} from 'react';
import styled from 'styled-components'
import {__RouterContext} from 'react-router'

const StyledFooter = styled.div`
    font-size:0.8em;
    color:${props=>props.colorScheme.color1};
    margin:0;
    margin-bottom:10px;
    padding:0;
    padding-top:2px;
    text-align:center;
    border-top:1px solid ${props=>props.colorScheme.color1};
    width:100%;
    background-color:${props=>props.colorScheme.backgroundColor1};
    border-bottom:2px solid ${props=>props.colorScheme.backgroundColor1};
`;

const Footer = () => {
    const setComponentProps = (location) =>{
        switch (location) {
            case '':
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

    const {location} = useContext(__RouterContext);

    const {colorScheme} = setComponentProps(location.pathname)

    return (
        <StyledFooter colorScheme={colorScheme}>
            Developed by Eduardo Piña, 2021.
        </StyledFooter>
    );
}

export default Footer;