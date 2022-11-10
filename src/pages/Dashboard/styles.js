import styled from 'styled-components';

export const Container = styled.div `
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6.25rem;

    h4 {
        color: #1c1c1c;
        margin: 0.5em 0;
    }
`;

export const NoPosts = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
        color: #aaa;
        margin-bottom: 1.5em;
    };
`;

export const PostHeader = styled.div `
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 0.625rem;
    font-weight: bold;
    border-bottom: 0.125rem solid #CCC;
`;

export const PostRow = styled.div `
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 0.625rem;
    align-items: center;
    border-bottom: 0.063rem solid #EEE;

    p {
        color: #1c1c1c;
    };
`;
