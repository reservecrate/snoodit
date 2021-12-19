import { Stack, Typography, Link } from '@mui/material';
import { SxProps } from '@mui/system';

const styles: SxProps = {
    mx: '.25em',
    color: '#00FFFF'
};

const Utilities = () => {
    const utilities = [
        'share',
        'save',
        'hide',
        'give award',
        'report',
        'crosspost'
    ];
    return (
        <Stack direction='row' alignItems='center'>
            <Typography variant='body2' sx={{ mr: '.25em' }}>
                69 comments
            </Typography>
            {utilities.map(utility => (
                <Link underline='hover' sx={styles}>
                    {utility}
                </Link>
            ))}
        </Stack>
    );
};

export default Utilities;
