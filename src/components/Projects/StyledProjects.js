import styled from 'styled-components'

const StyledProjects = styled.div `
    width:100%;
    display:flex;
    justify-content:center;

    .Projects-conatiner{
        margin-top:3em;
        max-width: 1095px;
        height:${props=> props.height-80 +'px'};
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px,250px));
        grid-template-rows: 1fr;
        grid-gap: 115px;
        justify-content: center;
    }
`

export default StyledProjects;