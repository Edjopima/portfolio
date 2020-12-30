import styled from 'styled-components'

const StyledProjects = styled.div `
    position:absolute;
    width: 100%;
    .Projects{
        width:100%;
        display:flex;
        justify-content:center;
        height:${props=> props.height-80 +'px'};
        background-color:${props=>props.colorScheme.backgroundColor};
        padding-top:3em;
        height:max-content;
    }
    .Projects-conatiner{
        max-width: 1095px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px,250px));
        grid-template-rows: 1fr;
        grid-gap: 115px;
        justify-content: center;
        background-color:${props=>props.colorScheme.backgroundColor};
        padding-bottom:1em;
        height:max-content;
    }
    @media screen and (max-width: 480px){
        .Projects{
            width:100%;
            display:flex;
            justify-content:center;
            height:${props=> props.height-60 +'px'};
            background-color:${props=>props.colorScheme.backgroundColor};
            padding-top:3em;
            padding-bottom:1em;
            height:max-content;
        }
        .Projects-conatiner{
            max-width: 500px;
            grid-template-columns: repeat(auto-fill, minmax(50px,150px));
            grid-template-rows:1fr 1fr;
            grid-gap: 30px;
            grid-row-gap:10px;
            justify-content: center;
            background-color:${props=>props.colorScheme.backgroundColor};
            padding-bottom:0em;
        }
    }
`

export default StyledProjects;