import { Stack, Typography } from '@mui/material';

const FooterBottom = () => {
    return (
        <Stack sx={{ color: '#fff', my: '1.5em' }}>
            <Typography variant='body2'>
                Use of this site constitutes acceptance of our User Agreement
                and Privacy Policy. © 2021 reddit inc. All rights reserved.
            </Typography>
            <Typography variant='body2'>
                REDDIT and the ALIEN Logo are registered trademarks of reddit
                inc.
            </Typography>
        </Stack>
    );
};

export default FooterBottom;
