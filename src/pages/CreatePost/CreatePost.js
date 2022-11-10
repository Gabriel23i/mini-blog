import { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

import ErrorFeedback from '../../components/ErrorFeedback/ErrorFeedback';

import { useAuthValue } from '../../context/AuthContext';

import { useInsertDocument } from '../../hooks/useInsertDocument';

import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';

import {
    Box,
    TextField,
    Typography
} from '@mui/material';

import LoadingButton from '@mui/lab/LoadingButton';

import { Container } from './styles';

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState('');
    const [loading, setLoading] = useState(false);

    const { user } = useAuthValue();

    const { insertDocument, response } = useInsertDocument('posts');
    
    const navigate = useNavigate();

    const handleSubmit = (e)=> {
        
        setLoading(true);
        e.preventDefault();
        setFormError('');
        
        setTimeout(() => {
            try {
                new URL(image);
            } catch (error) {
                setFormError('A imagem precisar ser uma URL.');
                setLoading(false)
                return;
            };
    
            // create array tags
            const tagsArray = tags.split(',').map((tag)=> tag.trim().toLowerCase());
    
            if(!title || !image || !tags || !body){
                setFormError('Por favor, preencha todos os campos!');
                setLoading(false);
                return;
            };
    
            if(formError){
                setLoading(false)
                return;
            }
    
            insertDocument({
                title,
                image,
                body,
                tagsArray,
                uid: user.uid,
                createdBy: user.displayName
            });
            navigate('/');
            toast.success('Post criado com sucesso!');
        }, 1000);
    };

    return (
        <Container>
            <ScrollToTopOnMount />
            <Typography variant='h4'>
                Criar post
            </Typography>
            <Typography paragraph>
                Escreva sobre o que quiser e compartilhe o seu conhecimento!
            </Typography>
            <form onSubmit={handleSubmit}>
                <label>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField
                            label="Título"
                            variant="filled"
                            type='text'
                            name='title'
                            onChange={(e)=> setTitle(e.target.value)}
                            value={title}
                            required
                            fullWidth
                            placeholder='Pense num bom título...'
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
                            label='URL da Imagem'
                            placeholder='Insira uma imagem que representa o seu post'
                            variant="filled"
                            type='text'
                            name='image'
                            onChange={(e)=> setImage(e.target.value)}
                            value={image}
                            required
                            fullWidth
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
                            name='body'
                            id="filled-multiline-static"
                            label='Conteúdo'
                            placeholder='Insira o conteúdo do post'
                            multiline
                            rows={6}
                            onChange={(e)=> setBody(e.target.value)}
                            variant="filled"
                            required
                            value={body}
                            fullWidth
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
                            label='Tags'
                            placeholder='Insira as tags separadas por vírgulas'
                            variant="filled"
                            type='text'
                            name='tags'
                            onChange={(e)=> setTags(e.target.value)}
                            value={tags}
                            required
                            fullWidth
                        />
                    </Box>
                </label>
                <Box>
                    <LoadingButton
                        type='submit'
                        color='success'
                        loading={loading}
                        loadingIndicator="Aguarde..."
                        variant="contained"
                        disabled={loading ? true : false}
                        fullWidth
                    >
                        Criar
                    </LoadingButton>
                </Box>
                {response.error && <ErrorFeedback propError={response.error} />}
                {formError && <ErrorFeedback propError={formError} />}
            </form>
        </Container>
    );
};

export default CreatePost;
