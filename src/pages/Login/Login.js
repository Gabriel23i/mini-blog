import React, { useEffect, useState } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';

import ErrorFeedback from '../../components/ErrorFeedback/ErrorFeedback';
import RedirectRecoverPassword from '../../components/RedirectRecoverPassword/RedirectRecoverPassword';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';
import {
    FilledInput,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    TextField,
    Typography
} from '@mui/material';

import { Container } from './styles';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { login, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');

        const user = {
            email,
            password
        };

        await login(user);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    useEffect(()=>{
        if(authError){
            setError(authError);
        };
    },[authError]);
  
    return (
        <Container>
            <ScrollToTopOnMount />
            <Typography variant='h4'>Entrar</Typography>
            <Typography paragraph>Faça o login para poder utilizar o sistema</Typography>
            <form onSubmit={handleSubmit}>
                <label>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField
                            name='email'
                            type='email'
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            id="filled-basic"
                            label="E-mail"
                            variant="filled"
                            fullWidth
                            required
                        />
                        
                    </Box>
                </label>
                <label>
                    <FormControl
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                        variant="filled"
                    >
                        <InputLabel>Senha *</InputLabel>
                        <FilledInput
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            fullWidth
                            required
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <RedirectRecoverPassword />
                </label>
                <Box sx={{ '& > button': { m: 1 } }}>
                    <LoadingButton
                        type='submit'
                        size='medium'
                        color='success'
                        variant='contained'
                        loading={loading}
                        loadingIndicator="Aguarde..."
                        disabled={loading ? true : false}
                    >
                        Entrar
                    </LoadingButton>
                </Box>
                {error && <ErrorFeedback propError={error} />}
            </form>
        </Container>
    );
};

export default Login;
