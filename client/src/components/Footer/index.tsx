import { Stack } from '@mui/material';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

const Footer = () => {
    return (
        <Stack justifyContent='center'>
            <FooterTop />
            <FooterBottom />
        </Stack>
    );
};
export default Footer;
