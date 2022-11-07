import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { FormDialog } from '../DialogImageProfile/DialogImageProfile';
import { useImageProfileContext } from '../../hooks/useImageProfileContext';
import { AvatarProfile } from './AvatarProfile';
import { DialogLogout } from '../DialogLogout/DialogLogout';

export default function AccountMenu() {

    const { anchorEl, setAnchorEl} = useImageProfileContext();

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
                    marginRight:'50px',
                    position:'-webkit-sticky'
                }}
            >
                <IconButton
                    onClick={handleClick}
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
                sx={{ marginTop:'24px', marginLeft:'-20px' }}
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
}



