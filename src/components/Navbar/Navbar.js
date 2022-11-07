import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext';

import AccountMenu from '../AccountMenu/AccountMenu';
import { Box } from '@mui/system';

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
                    marginRight:'50px'
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
