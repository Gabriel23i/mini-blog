import styled from 'styled-components';

export const Nav = styled.nav`
    top: 0;
    width: 100%;
    z-index: 150;
    height: 70px;
    display: flex;
    position: fixed;
    padding: .5em 2em;
    align-items: center;
    background-color:#F5F5F5;
    justify-content: space-between;
    box-shadow: rgba(0,0,0.15) 0px -2px 10px 0px;

    span {
        font-weight: 900;
        text-transform: uppercase;
        font-size: 1.8em;
    };

    & a {
        text-decoration: none;
        color:#000;
        position: relative;
        letter-spacing: 0.5px;
        padding: 0 16px;
        margin: 0 16px;
    };

    & a:after {
        content: '';
        position: absolute;
        background-color: #0046EB;
        height: 3px;
        width: 0;
        left: 0;
        bottom: -10px;
        transition: 0.3s;
    };

    & .active:after {
        transition: 0.3s;
        width: 100%;
    };
`;

export const Logo = styled.div `
    :hover{
        cursor: pointer;
    }
`;
