import { useParams } from 'react-router-dom';

import { useFetchDocument } from '../../hooks/useFetchDocument';
import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';

import {
    Chip,
    Stack,
    Typography
} from '@mui/material';

import { Container, Content, Tags } from './styles';

const Post = () => {
    const { id } = useParams();
    const { document: post, loading } = useFetchDocument('posts', id);

    return (
        <Container>
            <ScrollToTopOnMount />
            {loading && <Typography paragraph>Carregando post...</Typography>}
            {post && (
                <>
                    <Typography variant='h4'>{post.title}</Typography>
                    <Content>
                        <img src={post.image} alt={post.title} />
                        <Typography paragraph>{post.body}</Typography>
                        <Tags>
                            {post.tagsArray.map((tag)=> (
                                <Stack key={tag} spacing={1} marginRight='0.25rem' alignItems="center">
                                    <Stack direction="row" spacing={1}>
                                        <Chip
                                            label={`#${tag}`}
                                            variant="outlined"
                                            sx={{ color:'#4779EE', borderColor:'#4779EE' }}
                                        />
                                    </Stack>
                                </Stack>
                            ))}
                        </Tags>
                    </Content>
                </>
            )}
        </Container>
    );
};

export default Post;
