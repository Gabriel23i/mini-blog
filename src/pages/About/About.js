import { Link } from 'react-router-dom';

import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';

import {
    Typography,
    Stack,
    Button,
} from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';

import { Container } from './styles';

const About = () => {
    return (
        <Container>
            <ScrollToTopOnMount />
            <Typography variant='h4'>
                Mini <span>Blog</span>
            </Typography>
            <Typography variant='inherit' paragraph>
                Este projeto consiste em um Blog feito com React no Front-end e Firebase no Back-end.
            </Typography>
            <Link to='/posts/create'>
                <Stack direction="row" spacing={2}>
                    <Button
                        startIcon={<PostAddIcon />}
                        size='medium'
                        color='primary'
                    >
                        Criar post
                    </Button>
                </Stack>
            </Link>
        </Container>
    );
};

export default About;
