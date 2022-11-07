import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';

import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';

import { Box, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { Container } from './styles';
import ErrorFeedback from '../../components/ErrorFeedback/ErrorFeedback';

const EditPost = () => {
    
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState('');
    
    const { id } = useParams();
    const { user } = useAuthValue();
    const { updateDocument, response } = useUpdateDocument('posts');
    const { document: post } = useFetchDocument('posts', id);

    const navigate = useNavigate();
    
    const handleSubmit = (e)=> {
        e.preventDefault();
        setFormError('');
        
        try {
            new URL(image);
        } catch (error) {
            setFormError('A imagem precisar ser uma URL.');
        };

        // create array tags
        const tagsArray = tags.split(',').map((tag)=> tag.trim().toLowerCase());

        if(!title || !image || !tags || !body){
            setFormError('Por favor, preencha todos os campos!');
        };

        if(formError) return;

        const data = {
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        };

        updateDocument(id, data);

        navigate('/dashboard');
    };

    useEffect(()=>{
        if(post){
            setTitle(post.title);
            setBody(post.body);
            setImage(post.image);

            const textTags = post.tagsArray.join(', ');
            setTags(textTags);
        };
    },[post]);

    return (
        <Container>
            <ScrollToTopOnMount />
            {post && (
                <>
                    <Typography variant='h4'>
                        Altere os dados do post como desejar
                    </Typography>
                    <form onSubmit={ handleSubmit }>
                        <label>
                            <TextField
                                label="Título"
                                variant="filled"
                                type='text'
                                name='title'
                                placeholder='Pense num bom título...'
                                onChange={(e)=> setTitle(e.target.value)}
                                value={title}
                                required
                            />
                        </label>
                        <label>
                            <TextField
                                label="URL da imagem"
                                variant="filled"
                                type='text'
                                name='image'
                                placeholder='Insira uma imagem que representa o seu post'
                                onChange={(e)=> setImage(e.target.value)}
                                value={image}
                                required
                            />
                        </label>
                        <Typography paragraph>
                            Preview da imagem atual
                        </Typography>
                        <img
                            src={post.image}
                            alt={post.title}
                        />
                        <label>
                            <TextField
                                label='Conteúdo'
                                multiline
                                maxRows={8}
                                variant='filled'
                                name='body'
                                placeholder='Insira o conteúdo do post'
                                onChange={(e)=> setBody(e.target.value)}
                                value={body}
                                required
                            />
                        </label>
                        <label>
                            <TextField
                                label="Tags"
                                variant="filled"
                                type='text'
                                name='tags'
                                placeholder='Insira as tags separadas por vírgulas'
                                onChange={(e)=> setTags(e.target.value)}
                                value={tags}
                                required
                            />
                        </label>
                        <Box>
                            <LoadingButton
                                type='submit'
                                color='success'
                                loading={response.loading}
                                loadingIndicator="Aguarde..."
                                variant="contained"
                                disabled={response.loading ? true : false}
                                fullWidth
                            >
                                Editar
                            </LoadingButton>
                        </Box>
                        {response.error && <ErrorFeedback propError={response.error} />}
                        {formError && <ErrorFeedback propError={formError} />}
                    </form>
                </>
            )}
        </Container>
    );
};

export default EditPost;
