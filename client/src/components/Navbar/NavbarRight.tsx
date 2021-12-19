import {
    Stack,
    Divider,
    Typography,
    Tooltip,
    Chip,
    IconButton
} from '@mui/material';
import { SxProps } from '@mui/system';
import CircleIcon from '@mui/icons-material/Circle';
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const styles: SxProps = {
    mx: '.5em',
    color: '#fff'
};

const NavbarRight = () => {
    return (
        <Stack direction='row' alignItems='center'>
            <Stack direction='row' alignItems='center' sx={styles}>
                <Tooltip title="that's you!">
                    <Typography variant='body1' sx={{ mr: '0' }}>
                        reservecrate
                    </Typography>
                </Tooltip>
                <Tooltip title='online'>
                    <CircleIcon sx={{ color: '#00FF7F', mx: '.25em' }} />
                </Tooltip>
                <Tooltip title='post karma'>
                    <Chip label='1082' sx={{ color: '#E2E8F0', ml: '0' }} />
                </Tooltip>
            </Stack>
            <Divider orientation='vertical' />
            <Tooltip title='inbox' sx={styles}>
                <IconButton>
                    <MailIcon />
                </IconButton>
            </Tooltip>
            <Divider orientation='vertical' />
            <Tooltip title='chat' sx={styles}>
                <IconButton>
                    <ChatIcon />
                </IconButton>
            </Tooltip>
            <Divider orientation='vertical' />
            <Tooltip title='preferences' sx={styles}>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </Tooltip>
            <Divider orientation='vertical' />
            <Tooltip title='log out' sx={styles}>
                <IconButton>
                    <LogoutIcon />
                </IconButton>
            </Tooltip>
        </Stack>
    );
};

export default NavbarRight;
