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
    }
`

export default StyledProjects;