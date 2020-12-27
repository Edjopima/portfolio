import styled from 'styled-components'

const StyledProjectCard = styled.div `
    margin-top:2em;
    width: 250px;
    height: 400px;
    color:${props=> props.colorScheme.color};
    transition: all .2s ease-in-out;
    background-color:${props=> props.colorScheme.backgroundColor};
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
        border: solid 2px ${props=> props.colorScheme.color};
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
        border:solid 2px ${props=> props.colorScheme.color};
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
    @media screen and (max-width: 480px){
        margin-top:1em;
        width: 150px;
        height: 220px;

        .ProjectCard-image {
            width:150px;
            height:80px;
        }

        .ProjectCard-contentContainer {
            padding-top:5px;
            height:140px;
            border-width:1px;
        }

        .ProjectCard-title{
            margin-left:7px;
            margin-bottom:0px;
            font-size:10px;
            font-weight:800;
            text-transform:uppercase;
        }

        .ProjectCard-description{
            margin-top:2px;
            margin-left:7px;
            font-size:8px;
        }

        .ProjectCard-buttonContainer{
            margin-top:7px;
            width:130px;
        }

        .ProjectCard-button1 {
            margin-left:5px;
            font-size:8px;
            margin-right:2px;
        }

        .ProjectCard-button2 {
            margin-right:5px;
            padding:2px 5px;
            font-size:8px;
            border-width:1px;
        }

        .ProjectCard-button2:hover {
            background-color:var(--blue-fade);
        }

        .ProjectCard-button2 img{
            margin-right:2px;
            height:15px;
            width:15px;
        }
    }
`

export default StyledProjectCard;