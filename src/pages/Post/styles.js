import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 7.5rem;

    h4 {
        color: #1c1c1c;
        margin-bottom: 0.8rem;
    };
`;

export const Content = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 37.5rem;
        max-width: 37.5rem;
        border: 0.063rem solid #a0a0a0;
        border-radius: 0.25rem;
    };

    p {
        padding: 1rem;
        max-width: 50rem;
        text-align: justify;
        word-wrap: break-word;
        font-size: 1.125rem;
    };
`;

export const Tags = styled.div `
    display: flex;
    justify-content: center;
`;
