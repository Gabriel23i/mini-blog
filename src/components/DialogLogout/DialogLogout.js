import { useState } from 'react';

import { useAuthentication } from '../../hooks/useAuthentication';
import { useImageProfileContext } from '../../hooks/useImageProfileContext';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Typography } from '@mui/material';

import { Logout } from '@mui/icons-material';

import { Container, ContentButtons } from './styles';

export function DialogLogout() {
    const [open, setOpen] = useState(false);

    const { logout } = useAuthentication();
    const { setAnchorEl } = useImageProfileContext();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = () =>{
        setOpen(false)
        logout()
        setAnchorEl(null)
    }

    return (
        <>
            <Button
                startIcon={<Logout />}
                variant="text"
                onClick={ handleOpen }
            >
                Sair
            </Button>
            <Dialog maxWidth='md' open={ open } onClose={ handleClose }>
                <Container>
                    <Typography variant='h5'>
                        Você deseja sair ?
                    </Typography>
                </Container>
                <ContentButtons>
                    <Button variant="outlined" onClick={ handleClose }>
                        Fechar
                    </Button>
                    <Button
                        color='error'
                        variant='contained'
                        onClick={ handleLogout }
                    >
                        Sair
                    </Button>
                </ContentButtons>
            </Dialog>
        </>
    );
};
