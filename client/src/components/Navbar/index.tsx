import { Stack, Divider } from '@mui/material';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';

const Navbar = () => {
    return (
        <>
            <Stack
                direction='row'
                justifyContent='space-between'
                sx={{
                    py: '.25em'
                }}
            >
                <NavbarLeft />
                <NavbarRight />
            </Stack>
            <Divider />
        </>
    );
};

export default Navbar;
