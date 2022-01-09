import { Link, Stack, Typography } from '@mui/material';

const Help = () => {
    return (
        <Stack sx={{ mx: '1em', my:'.5em'}}>
            <Typography variant='h6' sx={{ color: '#fff' }}>
                help
            </Typography>
            <Link underline='hover'>site rules</Link>
            <Link underline='hover'>Reddit help center</Link>
            <Link underline='hover'>reddiquette</Link>
            <Link underline='hover'>mod guidelines</Link>
            <Link underline='hover'>contact us</Link>
        </Stack>
    );
};

export default Help;
