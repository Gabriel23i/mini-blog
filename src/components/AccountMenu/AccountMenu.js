import { AvatarProfile } from './AvatarProfile';
import { DialogLogout } from '../DialogLogout/DialogLogout';
import { FormDialog } from '../DialogImageProfile/DialogImageProfile';

import { useImageProfileContext } from '../../hooks/useImageProfileContext';

import {
    Box,
    Menu,
    MenuItem,
    IconButton
} from '@mui/material';

export default function AccountMenu() {

    const { anchorEl, setAnchorEl } = useImageProfileContext();

    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
            <Box
                sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginRight:'3.12rem',
                    position:'-webkit-sticky'
                }}
            >
                <IconButton
                    onClick={ handleClick }
                    size="small"
                    sx={{ ml: 2 }}
                >
                    <AvatarProfile />
                </IconButton>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    marginTop:'1.5rem',
                    marginLeft:'-1rem'
                }}
            >
                <MenuItem>
                    <FormDialog />
                </MenuItem>
                <MenuItem>
                    <DialogLogout />
                </MenuItem>
            </Menu>
        </>
    );
};
