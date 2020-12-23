import styled from 'styled-components';

const StyledHeader = styled.div `
    display: flex;
    align-items: center;
    justify-content:space-between;
    height:80px;
    width:100%;
    .header-name {
        padding-left: 15px;
        width: 50%;
        display: flex;
        justify-content: start;
        height: 100%;
        align-items: center;
        background: ${props=>props.colorScheme.backgroundColor1};
        color: ${props=>props.colorScheme.color1};
}
    .header-options {
        padding-right: 15px;
        width: 50%;
        display: flex;
        justify-content: end;
        height: 100%;
        align-items: center;
        background: ${props=>props.colorScheme.backgroundColor2};
        color: ${props=>props.colorScheme.color2};
    }
    .header-text {
        font-family: 'Roboto';
        font-weight:400;
        font-size: 15pt;
        text-transform: uppercase;
        margin:15px;
        margin-top:5px;
        margin-bottom: 5px;
    }
    .header-text:hover{
        cursor: pointer;
    }
`
export default StyledHeader;