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
        margin-top:30px;
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
        padding:10px
    }
    .Message {
        height:125px;
    }
    .Contact-button{
        margin:12px;
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
    .Contact-button:hover{
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
`
export default StyledContact;