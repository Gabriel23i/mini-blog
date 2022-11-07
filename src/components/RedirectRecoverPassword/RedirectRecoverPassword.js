import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

const RedirectRecoverPassword = () => {

    const navigate = useNavigate();

    const redirectPageRecoverPassword = () => {
        navigate('/recoverpassword');
    };

    return (
        <Button
            variant='text'
            onClick={redirectPageRecoverPassword}
            sx={{
                '&:hover':{
                    backgroundColor:'transparent'
                }
            }}
        >
            Esqueci a senha
        </Button>
    );
};

export default RedirectRecoverPassword;
