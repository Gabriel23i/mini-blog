import { Link } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Box, Typography } from '@mui/material';
import { DialogDelete } from '../../components/DialogDelete/DialogDelete';

import PostAddIcon from '@mui/icons-material/PostAdd';

import { Container, NoPosts, PostHeader } from './styles';
import Loading from '../../components/Loading/Loading';

const Dashboard = () => {

    const { user } = useAuthValue();
    const uid = user.uid;

    const { documents: posts, loading } = useFetchDocuments('posts', null, uid);

    return (
        <Container>
            {loading && <Loading />}
            <ScrollToTopOnMount />
            <Typography variant='h4'>
                Gerencie seus posts
            </Typography>
            {!posts || posts.length === 0 ?
                (
                    <NoPosts>
                        <Typography>
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
                )
                :(
                    <>
                        <PostHeader>
                            <span>Títulos</span>
                            <span>Ações</span>
                        </PostHeader>
                        {posts && posts.map((post)=> (
                            <PostHeader key={post.id}>
                                <Typography>{post.title}</Typography>
                                <Box>
                                    <Stack direction="row" spacing={2}>
                                        <Link to={`/posts/${post.id}`}>
                                            <Button
                                                startIcon={<RemoveRedEyeOutlinedIcon />}
                                                size='medium'
                                                variant='contained'
                                            >
                                                Visualizar
                                            </Button>
                                        </Link>
                                        <Link to={`/posts/edit/${post.id}`}>
                                            <Button
                                                startIcon={<EditOutlinedIcon />}
                                                size='medium'
                                                variant='contained'
                                            >
                                                Editar
                                            </Button>
                                        </Link>
                                        <DialogDelete post={post} />
                                    </Stack>
                                </Box>
                            </PostHeader>
                        ))}
                    </>
                )
            }
        </Container>
    );
};

export default Dashboard;
