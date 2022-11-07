import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

    h4 {
        margin-bottom: .5em;
    };

    p {
        margin-bottom: 2em;
    };
`;

export const NoPosts = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
