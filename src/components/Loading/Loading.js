import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

export default function Loading() {
    return (
        <Box sx={{ height:'100vh', width:'100wh', display: 'flex' }}>
            <CircularProgress
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                }}
            />
        </Box>
    );
}
