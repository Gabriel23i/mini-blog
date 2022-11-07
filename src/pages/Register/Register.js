import React, { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
    Box,
    FilledInput,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    TextField,
    Typography
} from '@mui/material';

import { Container } from './styles';
import ErrorFeedback from '../../components/ErrorFeedback/ErrorFeedback';

const Register = () => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');

        const user = {
            displayName,
            email,
            password
        };

        if(password !== confirmPassword){
            setError('As senhas precisam ser iguais!');
            return;
        };

        await createUser(user);
    };

    useEffect(()=>{
        if(authError){
            setError(authError);
        };
    },[authError]);
  
    return (
        <Container>
            <ScrollToTopOnMount />
            <Typography variant='h4'>Cadastre-se</Typography>
            <Typography paragraph>Crie seu usuário e compartilhe suas histórias</Typography>
            <form onSubmit={handleSubmit}>
                <label>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField
                            type='text'
                            name='displayname'
                            value={displayName}
                            onChange={(e)=> setDisplayName(e.target.value)}
                            label="Nome"
                            variant="filled"
                            fullWidth
                            required
                        />
                    </Box>
                </label>
                <label>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField
                            type='email'
                            name='email'
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            required
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={()=> setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </label>
                <label>
                    <FormControl
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                        variant="filled"
                    >
                        <InputLabel>Confirmação de senha *</InputLabel>
                        <FilledInput
                            name='confirmPassword'
                            type={showPasswordConfirm ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e)=> setConfirmPassword(e.target.value)}
                            fullWidth
                            required
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={()=> setShowPasswordConfirm(!showPasswordConfirm)}
                                        edge="end"
                                    >
                                        {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
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
                        Cadastrar
                    </LoadingButton>
                </Box>
                {error && <ErrorFeedback propError={error} />}
            </form>
        </Container>
    );
};

export default Register;
