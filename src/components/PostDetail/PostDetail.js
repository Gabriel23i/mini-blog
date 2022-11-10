import { Link } from 'react-router-dom';

import {
    Chip,
    Stack,
    Typography
} from '@mui/material';

import { Container, Skin, Tags } from './styles';

const PostDetail = ({ post }) => {
    return (
        <Container>
            <Link to={`/posts/${post.id}`}>
                <Skin>
                    <img src={post.image} alt={post.title} />
                    <Typography paragraph>
                        Continue lendo
                    </Typography>
                </Skin>
                <Typography variant='h5'>{post.title}</Typography>
            </Link>
            <Typography paragraph className='createdBy'>
                Criado por: {post.createdBy}
            </Typography>
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
        </Container>
    );
};

export default PostDetail;
