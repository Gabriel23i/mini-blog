import React from 'react';
import { NavLink } from 'react-router-dom';

import { useAuthentication } from '../../hooks/useAuthentication';
import { useAuthValue } from '../../context/AuthContext';

import styles from './Navbar.module.css';

const Navbar = () => {
    const { user } = useAuthValue();
  return (
    <nav className={styles.navbar}>
        <NavLink className={styles.brand} to='/'>
            Mini <span>Blog</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink 
                    className={({ isActive }) => (isActive ? styles.active : '')}
                    to='/'
                    end
                >
                    Home
                </NavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.active : '')}
                            to='/login'
                        >
                            Entrar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.active : '')}
                            to='/register'
                        >
                            Cadastrar
                        </NavLink>
                    </li>
                </>
            )}
            {user && (
                <>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.active : '')}
                            to='/posts/create'
                        >
                            Novo post
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.active : '')}
                            to='/dashboard'
                        >
                            Dashboard
                        </NavLink>
                    </li>
                </>
            )}
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.active : '')}
                    to='/about'
                >
                    Sobre
                </NavLink>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;
