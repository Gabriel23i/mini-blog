import { useAuthValue } from '../../context/AuthContext';

import Avatar from '@mui/material/Avatar';

export const AvatarProfile = () => {
    
    const { user } = useAuthValue();

    return (
        user && (
            <Avatar
                src={ user?.photoURL}
                sx={{ width: 42, height: 42 }}
            />
        )
    );
};
