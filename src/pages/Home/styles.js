import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

    h4 {
        color: #1c1c1c;
        margin: 0.5em 0;
    };
`;

export const NoPosts = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    p {
        color: #aaa;
        margin-bottom: 1.5em;
    };

    a {
        padding: 10px 25px;
    };
`;
