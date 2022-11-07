import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useFetchDocuments } from '../../hooks/useFetchDocuments';

import PostDetail from '../../components/PostDetail/PostDetail';
import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Box, Button, Stack } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import PostAddIcon from '@mui/icons-material/PostAdd';

import { Container, NoPosts } from './styles';
import Loading from '../../components/Loading/Loading';

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
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 500,
                    maxWidth: '100%',
                    marginBottom: '2em'
                }}
            >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Busque por #tags"
                  onChange={(e)=> setQuery(e.target.value)}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton type='submit' sx={{ p: '10px' }} aria-label="search">
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
