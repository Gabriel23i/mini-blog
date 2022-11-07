import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 120px;

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
        width: 72%;
        max-width: 100%;
    };

    p {
        padding: 16px;
        max-width: 800px;
        text-align: start;
        word-wrap: break-word;
        font-size: 18px;
    };
`;

export const Tags = styled.div `
    display: flex;
    justify-content: center;
`;
