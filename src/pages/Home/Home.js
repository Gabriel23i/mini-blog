import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import PostDetail from '../../components/PostDetail/PostDetail';
import Loading from '../../components/Loading/Loading';

import { useFetchDocuments } from '../../hooks/useFetchDocuments';

import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';

import {
    Box,
    IconButton,
    Typography,
    Paper,
    Stack,
    Button,
    Divider,
    InputBase
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import PostAddIcon from '@mui/icons-material/PostAdd';

import { Container, NoPosts } from './styles';

const Home = () => {
    const [query, setQuery] = useState('');
    
    const { documents: posts, loading } = useFetchDocuments('posts');
    
    const navigate = useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault();

        if(query){
            return navigate(`/search?q=${query}`);
        };
    };

    return (
        <Container>
            <ScrollToTopOnMount />
            <Typography variant='h4'>
                Veja os nossos posts mais recentes
            </Typography>
            <Paper
                component="form"
                onSubmit={handleSubmit}
                sx={{ 
                    p: '0.125rem 0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    width: 500,
                    maxWidth: '100%',
                    marginBottom: '4em',
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Busque por #tags"
                    onChange={(e)=> setQuery(e.target.value)}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton type='submit' sx={{ p: '0.625rem' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
            </Paper>
            <Box>
                {loading && <Loading />}
                {posts && posts.map((post)=> (
                    <PostDetail key={post.id} post={post} />
                ))}
                {posts && posts.length === 0 && (
                    <NoPosts>
                        <Typography paragraph>
                            Não foram encontrados posts
                        </Typography>
                        <Link to='/posts/create'>
                            <Stack direction="row" spacing={2}>
                                <Button
                                    startIcon={<PostAddIcon />}
                                    size='medium'
                                    color='primary'
                                >
                                    Criar primeiro post
                                </Button>
                            </Stack>
                        </Link>
                    </NoPosts>
                )}
            </Box>
        </Container>
    );
};

export default Home;
