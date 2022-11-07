import React from 'react';

import { Typography } from '@mui/material';

import { FooterContainer } from './styles';

const Footer = () => {
    return (
        <FooterContainer>
            <Typography variant='h5'>Escreva sobre o que você tem interesse!</Typography>
            <Typography paragraph>Mini Blog &copy; 2022</Typography>
        </FooterContainer>
    );
};

export default Footer;
