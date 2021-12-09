import { Link, Stack, Typography } from '@mui/material';

const Help = () => {
    return (
        <Stack sx={{ mx: '1em', my:'.5em'}}>
            <Typography variant='h6' sx={{ color: '#fff' }}>
                help
            </Typography>
            <Link>site rules</Link>
            <Link>Reddit help center</Link>
            <Link>reddiquette</Link>
            <Link>mod guidelines</Link>
            <Link>contact us</Link>
        </Stack>
    );
};

export default Help;
