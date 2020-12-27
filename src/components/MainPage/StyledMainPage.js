import styled from 'styled-components'

const StyledMainPage = styled.div `
    position:absolute;
    width: 100%;
    .mainPage{
        display: grid;
        grid-auto-flow: row;
        grid-template-rows: 1fr;
        grid-template-columns:1fr 1fr;
        height: ${props=>props.height-80+'px'};
    }
    .mainPage-white {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color:var(--blue);
        justify-content: center;
    }

    .mainPage-blue {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        color:white;
        background-color:var(--blue);
    }

    .MainPage-title {
        font-size:30pt;
        font-weight:900;
        text-transform: uppercase;
        margin:14px;
        margin-bottom:0;
        margin-top:3em;
    }

    .MainPage-text {
        font-size:15pt;
        font-weight:400;
        text-transform: uppercase;
        margin:14px;
        margin-top:0;
    }

    .MainPage-button {
        border:solid 2px;
        padding:15px;
        font-size:15pt;
        font-weight:400;
        text-transform: uppercase;
        align-self:center;
        margin-bottom:100px;
        transition: all .2s ease-in-out;
    }

    .MainPage-button:hover {
        cursor: pointer;
        transform:scale(1.1);
    }

    @media screen and (max-width: 480px){
    .MainPage{
        height: ${props=>props.height+'px'};
    }
    .MainPage-title {
        padding-top:1em;
        font-size:14pt;
        margin:7px;
        margin-bottom:0;
        margin-top:1em;
    }

    .MainPage-text {
        font-size:8pt;
        margin:7px;
        margin-top:0;
        padding-bottom:10px;
    }

    .MainPage-button {
        padding:8px;
        font-size:6pt;
        margin-bottom:200px;
    }

    }
`

export default StyledMainPage;