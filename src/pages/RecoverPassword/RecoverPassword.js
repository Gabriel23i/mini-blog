import { useState } from 'react';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';

import Loading from '../../components/Loading/Loading';

import { useAuthentication } from '../../hooks/useAuthentication';

import {
    Box,
    Typography,
    TextField
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { Container, ButtonStyle } from './styles';

const RecoverPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const { auth } = useAuthentication();

    const hadleRecoverPassword = async(e) =>{
        e.preventDefault();
        setLoading(true);

        sendPasswordResetEmail(auth,email).then(()=>{
            toast.success('Email de recuperação enviado com sucesso!');
            setLoading(false);
            setEmail('');
        }).catch(error => {
            toast.error('Erro! E-mail não encontrado.');
            setLoading(false);
        });
    };

    return (
        <Box
            sx={{
                height:'100vh',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
            }}
        >
            {
                loading ? <Loading />
                :(
                    <Container>
                        <Box>
                            Mini <span>Blog</span>
                        </Box>
                        <Typography paragraph>Digite seu e-mail para receber o link de redefinição da senha</Typography>
                        <form onSubmit={hadleRecoverPassword}>
                            <label>
                                <Box
                                    sx={{
                                        width: 500,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField
                                        type='email'
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        id="filled-basic"
                                        label="E-mail"
                                        variant="filled"
                                        fullWidth
                                    />
                                </Box>
                            </label>
                            <ButtonStyle>
                                <LoadingButton
                                    type='submit'
                                    color='success'
                                    variant="contained"
                                    loading={loading}
                                    loadingIndicator="Aguarde..."
                                    disabled={loading ? true : false}
                                >
                                    Redefinir
                                </LoadingButton>
                            </ButtonStyle>
                        </form>
                    </Container>
                )
            }
        </Box>
    );
};

export default RecoverPassword;
