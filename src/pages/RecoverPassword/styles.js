import styled from "styled-components";

export const Container = styled.div `
    padding: 1.37rem;
    border: 0.063rem #a9a9a9;
    height: 20rem;
    border-radius: 0.50rem;
    text-align: center;
    background-color: rgb(255,255,255);

    span {
        font-weight: 900;
        text-transform: uppercase;
        font-size: 1.8em;
    };

    p {
        font-size: 1.12rem;
        text-align: center;
        padding: 3rem 0 1.8rem 0;
        color: #2c2c2c;
    };
`;

export const ButtonStyle = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1.8rem;
`;
