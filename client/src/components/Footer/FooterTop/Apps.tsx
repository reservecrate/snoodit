import { Link, Stack, Typography } from '@mui/material';

const Apps = () => {
    return (
        <Stack sx={{mx: '1em', my:'.5em'}}>
            <Typography variant='h6' sx={{ color: '#fff'}}>apps & tools</Typography>
            <Link underline='hover'>Reddit for iPhone</Link>
            <Link underline='hover'>Reddit for Android</Link>
            <Link underline='hover'>mobile website</Link>
        </Stack>
    );
};

export default Apps;
