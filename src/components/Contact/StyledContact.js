import styled from 'styled-components'

const StyledContact = styled.div `
    position:absolute;
    width: 100%;
    .Contact{
        color:var(--blue);
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }
    .Contact-title {
        margin:12px;
        margin-top:5px;
        font-size:45px;
        font-weight:900;
        text-transform:uppercase;
    }
    .Contact-input{
        margin:12px;
        height:20px;
        width:350px;
        border:solid 2px var(--blue);
        font-size:15px;
        font-weight:200;
        color:var(--blue);
        padding:10px;
        outline:none;
    }
    .Message {
        height:125px;
    }
    .Contact-buttonContainer{
        display: flex;
        flex-direction: row;
    }
    .Contact-button{
        margin:8px 10px;
        display: flex;
        justify-content:center;
        align-items: center;
        height:40px;
        width:150px;
        border:solid 2px var(--blue);
        font-size: 20px;
        font-weight:400;
        text-transform:uppercase;
        transition: all .2s ease-in-out;
    }
    .Contact-button2{
        height:40px;
        width:150px;
        margin:8px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 900;
        font-size: 20px;
        text-transform: uppercase;
        transition: all .2s ease-in-out;
    }
    .Contact-errorText{
        color:red;
        font-size: 20px;
        font-weight:300;
        margin:0;
        padding:0;
        text-transform:uppercase;
    }
    .Contact-button:hover, .Contact-button2:hover{
        transform:scale(1.1);
        cursor:pointer;
    }
    .Contact-imageContainer{
        margin:12px;
        display: flex;
        flex-direction: row;
        height:40px;
        width:200px;
        align-items: center;
    }
    .Contact-image {
        margin-right: 12px;
        width:40px;
        height:40px;
        transition: all .2s ease-in-out;
    }
    .Contact-image:hover{
        transform:scale(1.1);
        cursor: pointer;
    }
    .twitter{
        margin-right: 2px;
        height:60px;
        width:60px;
    }
    .instagram {
        margin-right: 2px;
    }

    @media screen and (max-width: 480px){
    .Contact-title {
        margin-top:40px;
        font-size:30px;
    }
    .Contact-input{
        width:220px;
        height:15px;
        font-size:12px;
        color:var(--blue);
    }
    .Message {
        height:115px;
    }
    .Contact-button{
        margin:8px 0px;
        height:30px;
        width:120px;
        font-size: 15px;
    }
    .Contact-button2{
        margin:8px 0px;
        height:30px;
        width:120px;
        font-size: 15px;
    }
    .Contact-errorText{
        font-size: 15px;
    }
    .Contact-imageContainer{
        margin:10px;
        height:40px;
        width:auto;
        align-items: center;
    }
    .Contact-image {
        margin-right: 12px;
        width:30px;
        height:30px;
        transition: all .2s ease-in-out;
    }
    .twitter{
        margin-right: 2px;
        height:50px;
        width:50px;
    }
    .instagram {
        margin-right: 2px;
        padding-left: 10px
    }
    }
`
export default StyledContact;