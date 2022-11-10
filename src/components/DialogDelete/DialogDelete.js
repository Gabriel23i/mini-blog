import { useState } from 'react';

import { useDeleteDocument } from '../../hooks/useDeleteDocument';

import {
    Button,
    Dialog,
    Typography
} from '@mui/material';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import { Container, ContentButtons } from './styles';

export function DialogDelete({ post }) {
    const [open, setOpen] = useState(false);

    const { deleteDocument } = useDeleteDocument('posts');

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (id) => {
        deleteDocument(id);
        return handleClose();
    };

    return (
        <>
            <Button
                startIcon={<DeleteForeverOutlinedIcon />}
                onClick={()=> setOpen(true)}
                variant='contained'
                size='medium'
                color='error'
            >
                Excluir
            </Button>
            <Dialog maxWidth='md' open={ open } onClose={ handleClose }>
                <Container>
                    <Typography variant='h5'>
                        Você deseja excluir o post abaixo ?
                    </Typography>
                    <Typography paragraph>
                        { post.title }
                    </Typography>
                </Container>
                <ContentButtons>
                    <Button onClick={ handleClose }>
                        Fechar
                    </Button>
                    <Button
                        color='error'
                        variant='contained'
                        onClick={()=> handleDelete(post.id)}
                    >
                        Excluir
                    </Button>
                </ContentButtons>
            </Dialog>
        </>
    );
};
