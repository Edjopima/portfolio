import styled from 'styled-components';

const StyledAboutMe = styled.div `
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 1fr;
    grid-template-columns:1fr 1fr;
    height: ${props=>props.height-80+'px'};
    .aboutMe-white {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color:var(--blue);
        justify-content: center;
    }
    .aboutMe-blue {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color:white;
        background-color:var(--blue);
    }
    .aboutMe-title {
        margin-left:20px;
        font-size:35px;
        font-weight: 300;
        text-transform: uppercase;
    }
    .aboutMe-name{
        font-weight:900;
    }
    .aboutMe-text{
        margin-left:20px;
        margin-right:30px;
        font-size:20px;
        font-weight: 300;
    }
    .aboutMe-buttonContainer{
        margin-top:30px;
        margin-left:20px;
        display: flex;
        flex-direction: row;
    }
    .aboutMe-button1{
        display: flex;
        justify-content: center;
        align-items:center;
        border: solid 3px var(--blue);
        text-transform: uppercase;
        font-weight: 400;
        font-size: 20px;
        padding: 15px;
        margin-right:20px;
        transition: all .2s ease-in-out;
    }
    .aboutMe-button2{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 900;
        font-size: 20px;
        text-transform: uppercase;
        transition: all .2s ease-in-out;
    }
    .aboutMe-button1:hover,.aboutMe-button2:hover{
        cursor:pointer;
        transform:scale(1.1);
    }
`

export default StyledAboutMe;