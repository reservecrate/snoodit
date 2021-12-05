import { Stack } from '@mui/material';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';

const Navbar = () => {
    return (
        <Stack direction='row' justifyContent='space-between'>
            <NavbarLeft />
            <NavbarRight />
        </Stack>
    );
};

export default Navbar;
