import { Typography, Link, Stack } from '@mui/material';

const Monetization = () => {
    return (
        <Stack sx={{ mx: '1em', my: '.5em' }}>
            <Typography variant='h6' sx={{ color: '#fff' }}>
                uwu
            </Typography>
            <Link underline='hover'>reddit premium</Link>
            <Link underline='hover'>reddit coins</Link>
            <Link underline='hover'>redditgifts</Link>
        </Stack>
    );
};

export default Monetization;
