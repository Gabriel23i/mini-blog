import { Typography } from '@mui/material';

const ErrorFeedback = ({ propError }) => {
    return (
        <div>
            <Typography
                sx={{ 
                    color: '#721C24',
                    backgroundColor: '#F8D7DA',
                    border: '0.06rem solid #F5C6CB',
                    padding: '0.32rem',
                    borderRadius: '0.25rem',
                    marginTop:'1rem'
                }}
                paragraph
            >
                {propError}
            </Typography>
        </div>
    );
};

export default ErrorFeedback;
