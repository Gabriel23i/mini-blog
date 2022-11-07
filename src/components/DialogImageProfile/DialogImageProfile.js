import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { handleCreateImageProfile } from '../../hooks/useImageProfile';
import { useImageProfileContext } from '../../hooks/useImageProfileContext';
import { Box, FormControl } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { Content } from './styles';

export function FormDialog() {
    
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const { urlImage, setUrlImage, setAnchorEl } = useImageProfileContext();

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
                await handleCreateImageProfile(response?.avatar_url);
                setUrlImage('');
                handleClose();
                setAnchorEl(null);
                setLoading(false);
            };
        };
    };

    return (
        <Box>
            <Button
                startIcon={urlImage.url ? <EditIcon /> : <AddIcon />}
                variant="text"
                onClick={handleClickOpen}
            >
                { urlImage.url ? 'Alterar foto' : 'Adicionar foto' }
            </Button>
        
            <Dialog open={open} onClose={handleClose}>
                <Content>
                    <DialogContentText>
                        Para { urlImage.url ? 'alterar' : 'cadastrar' } a foto de seu perfil, você deve digitar o mesmo nome que é utilizado no perfil do seu github. 
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
                                { urlImage.url ? 'Alterar' : 'Cadastrar' }
                            </LoadingButton>
                        </DialogActions>
                    </form>
                </Content>
            </Dialog>
        </Box>
    );
}
