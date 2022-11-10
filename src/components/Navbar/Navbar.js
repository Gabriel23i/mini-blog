import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import AccountMenu from '../AccountMenu/AccountMenu';

import { useAuthValue } from '../../context/AuthContext';

import { Box } from '@mui/material';

import { Nav, Logo } from './styles';

const Navbar = () => {
    const { user } = useAuthValue();

    const navigate = useNavigate();

    const handleNavigate = ()=> {
        navigate('/');
    };

    return (
        <Nav>
            <Logo onClick={handleNavigate}>
                Mini <span>Blog</span>
            </Logo>
            <Box
                sx={{
                    marginRight:'3.12rem'
                }}
            >
                <NavLink to='/' end>
                    Home
                </NavLink>
                {!user && (
                    <>
                        <NavLink to='/login'>
                            Entrar
                        </NavLink>
                        <NavLink to='/register'>
                            Cadastrar
                        </NavLink>
                    </>
                )}
                {user && (
                    <>
                        <NavLink to='/posts/create'>
                            Novo post
                        </NavLink>
                        <NavLink to='/dashboard'>
                            Dashboard
                        </NavLink>
                    </>
                )}
                <NavLink to='/about'>
                    Sobre
                </NavLink>
            </Box>
            <AccountMenu />
        </Nav>
    );
};

export default Navbar;
