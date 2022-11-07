import { Link } from 'react-router-dom';

import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

import PostDetail from '../../components/PostDetail/PostDetail';

import { Box, Button, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Container, NoPosts } from './styles';

const Search = () => {
    const query = useQuery();
    const search = query.get('q');
    
    const { documents: posts } = useFetchDocuments('posts', search);

    return (
        <Container>
            <Typography variant='h4'>
                Search
            </Typography>
            <Box>
                {posts && posts.length === 0 && (
                    <NoPosts>
                        <Typography paragraph>
                            Não foram encontrados posts a partir da sua busca...
                        </Typography>
                        <Link to='/'>
                            <Stack direction="row" spacing={2}>
                                <Button
                                    startIcon={<ArrowBackIcon />}
                                    size='medium'
                                    color='primary'
                                >
                                    Voltar
                                </Button>
                            </Stack>
                        </Link>
                    </NoPosts>
                )}
                {posts && posts.map((post)=> (
                    <PostDetail key={post.id} post={post} />
                ))}
            </Box>
        </Container>
    );
};

export default Search;
