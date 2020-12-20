import styled from 'styled-components'

const StyledProjectCard = styled.div `
    margin-top:2em;
    width: 250px;
    height: 400px;
    color:var(--blue);
    transition: all .2s ease-in-out;

    :hover{
        transform:scale(1.1);
    }

    .ProjectCard-image {
        width:250px;
        height:125px;
        background:gray;
    }

    .ProjectCard-contentContainer {
        padding-top:10px;
        height:275px;
        border: solid 2px var(--blue);
        border-top:none;
    }

    .ProjectCard-title{
        margin-left:14px;
        margin-bottom:0px;
        font-size:20px;
        font-weight:800;
        text-transform:uppercase;
    }

    .ProjectCard-description{
        padding:0;
        margin-top:4px;
        margin-left:14px;
        font-size:15px;
        font-weight:400;
    }

    .ProjectCard-buttonContainer{
        margin-top:15px;
        display:flex;
        width:250;
        height:auto;
        flex-direction:row;
        justify-content:space-around;
        align-items:center
    }

    .ProjectCard-button1 {
        margin-left:10px;
        font-size:15px;
        font-weight:500;
        text-transform:uppercase;
        cursor:pointer;
    }

    .ProjectCard-button2 {
        margin-right:10px;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        padding:5px 10px;
        border:solid 2px var(--blue);
        font-size:15px;
        font-weight:400;
        text-transform:uppercase;
        cursor:pointer;
    }

    .ProjectCard-button2:hover {
        background-color:var(--blue-fade);
    }

    .ProjectCard-button2 img{
        margin-right:4px;
    }
`

export default StyledProjectCard;