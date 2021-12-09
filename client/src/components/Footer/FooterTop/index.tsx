import { Stack } from '@mui/material';
import About from './About';
import Help from './Help';
import Apps from './Apps';
import Monetization from './Monetization';

const FooterTop = () => {
    return (
        <Stack direction='row' justifyContent='center' alignItems='flex-start'>
            <About />
            <Help />
            <Apps />
            <Monetization />
        </Stack>
    );
};

export default FooterTop;
