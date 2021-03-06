import styled from 'styled-components';

const StyledShotingTrainingSystem = styled.div `
    position:absolute;
    width: 100%;
    .ShotingTrainingSystem{
        display: grid;
        grid-auto-flow: row;
        grid-template-rows: 1fr;
        grid-template-columns:1fr 1fr;
        height: ${props=>props.height-80+'px'};
    }
    .ShotingTrainingSystem-white {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color:var(--blue);
        justify-content: center;
    }
    .ShotingTrainingSystem-blue {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color:white;
        background-color:var(--blue);
    }
    .ShotingTrainingSystem-Pic{
        width:250px;
        height: 250px;
        border:solid 10px white;
    }
    .ShotingTrainingSystem-Pic2{
        margin-top:10px;
        width:250px;
        height: 300px;
        border:solid 10px white;
    }
    .ShotingTrainingSystem-title {
        margin-left:20px;
        font-size:35px;
        font-weight: 600;
        text-transform: uppercase;
    }
    .ShotingTrainingSystem-name{
        font-weight:900;
    }
    .ShotingTrainingSystem-text{
        margin-left:20px;
        margin-right:30px;
        font-size:20px;
        font-weight: 300;
    }
    .ShotingTrainingSystem-buttonContainer{
        margin-top:30px;
        margin-left:20px;
        display: flex;
        flex-direction: row;
    }
    .ShotingTrainingSystem-button1{
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
    .ShotingTrainingSystem-button2{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 900;
        font-size: 20px;
        text-transform: uppercase;
        transition: all .2s ease-in-out;
    }
    .ShotingTrainingSystem-button1:hover,.ShotingTrainingSystem-button2:hover{
        cursor:pointer;
        transform:scale(1.1);
    }
    strong{
        font-weight: 600
    }
    @media screen and (max-width: 480px){
        .ShotingTrainingSystem{
            height: ${props=>props.height-60+'px'};
        }
        .ShotingTrainingSystem-title {
            margin-left:10px;
            font-size:18px;
        }
        .ShotingTrainingSystem-text{
            margin-left:10px;
            margin-right:15px;
            font-size:10px;
        }
        .ShotingTrainingSystem-buttonContainer{
            margin-top:15px;
            margin-left:10px;
        }
        .ShotingTrainingSystem-button1{
            border: solid 2px var(--blue);
            font-size: 10px;
            padding: 8px;
            margin-right:10px;
        }
        .ShotingTrainingSystem-button2{
            font-size: 10px;
        }
        .ShotingTrainingSystem-Pic{
            width:125px;
            height: 125px;
            border:solid 10px white;
        }
        .ShotingTrainingSystem-Pic2{
            margin-top:10px;
            width:125px;
            height: 150px;
            border:solid 10px white;
        }
    }
`

export default StyledShotingTrainingSystem;