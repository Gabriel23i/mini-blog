import styled from 'styled-components';

export const Nav = styled.nav`
    top: 0;
    width: 100%;
    z-index: 150;
    height: 4rem;
    display: flex;
    position: fixed;
    padding: .5em 2em;
    align-items: center;
    background-color:#EDF3F6;
    justify-content: space-between;
    box-shadow: rgba(0,0,0.15) 0 -0.12rem 0.62rem 0;

    span {
        font-weight: 900;
        text-transform: uppercase;
        font-size: 1.8em;
    };

    & a {
        text-decoration: none;
        color:#000;
        position: relative;
        letter-spacing: 0.031rem;
        padding: 0 1rem;
        margin: 0 1rem;
    };

    & a:after {
        content: '';
        position: absolute;
        background-color: #0046EB;
        height: 0.18rem;
        width: 0;
        left: 0;
        bottom: -0.62;
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
