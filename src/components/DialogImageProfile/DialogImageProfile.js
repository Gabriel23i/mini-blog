import { useState } from 'react';

import { useAuthValue } from '../../context/AuthContext';

import { handleCreateImageProfile } from '../../hooks/useImageProfile';
import { useImageProfileContext } from '../../hooks/useImageProfileContext';

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContentText,
    FormControl,
    TextField
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { LoadingButton } from '@mui/lab';

import { Content } from './styles';

export function FormDialog() {
    
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const { user } = useAuthValue();
    const { setAnchorEl } = useImageProfileContext();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleImage = async(e)=> {
        e.preventDefault();

        if(name){
            setLoading(true);
            const response = await (await 
                fetch(`https://api.github.com/users/${name}`)
            ).json();
            
            if(response){
                await handleCreateImageProfile(response?.avatar_url, user);
                handleClose();
                setAnchorEl(null);
                setLoading(false);
            };
        };
    };

    return (
        <Box>
            <Button
                startIcon={user?.photoURL ? <EditIcon /> : <AddIcon />}
                variant="text"
                onClick={handleClickOpen}
            >
                { user?.photoURL ? 'Alterar foto' : 'Adicionar foto' }
            </Button>
        
            <Dialog open={open} onClose={handleClose}>
                <Content>
                    <DialogContentText>
                        Para { user?.photoURL ? 'alterar' : 'cadastrar' } a foto de seu perfil, você deve digitar o mesmo nome que é utilizado no perfil do seu github. 
                    </DialogContentText>
                    <form onSubmit={handleImage}>
                        <FormControl
                            sx={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                margin:'1rem 0 1rem 0',
                                width: 500,
                                maxWidth: '100%'
                            }}
                            variant="standard"
                        >
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Nome"
                                placeholder="Nome do perfil github"
                                fullWidth
                                variant="standard"
                                onChange={(e)=> setName(e.target.value)}
                                value={name}
                                required
                                sx={{ width:'26rem'}}
                            />
                        </FormControl>
                        <DialogActions sx={{ display:'flex', justifyContent:'space-evenly', padding:'1.8rem 0 0.2rem 0' }}>
                            <LoadingButton
                                variant="outlined"
                                onClick={ handleClose }
                                disabled={loading ? true : false}
                            >
                                Cancelar
                            </LoadingButton>
                            <LoadingButton
                                type='submit'
                                color='success'
                                variant="contained"
                                loading={loading}
                                loadingIndicator="Aguarde..."
                                disabled={loading ? true : false}
                            >
                                { user?.photoURL ? 'Alterar' : 'Cadastrar' }
                            </LoadingButton>
                        </DialogActions>
                    </form>
                </Content>
            </Dialog>
        </Box>
    );
}
