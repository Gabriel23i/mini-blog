import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem;

    h5 {
        justify-content: center;
        align-items: center;
        margin-top: -2rem;
    };

    p {
        justify-content: center;
        align-items: center;
        margin-top: 1rem; 
    };
`;

export const ContentButtons = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin: -2rem 0 1.8rem 0;
`;
