import { Stack, Typography, Link as MUILink } from '@mui/material';
import { SxProps } from '@mui/system';
import { Link } from 'react-router-dom';

const styles: SxProps = {
    mx: '.25em',
    color: '#00FFFF'
};

const Utilities = ({ comments }: { comments: string[] }) => {
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
                {comments.length} comments
            </Typography>
            {utilities.map((utility) => (
                <MUILink underline='hover' sx={styles}>
                    {utility}
                </MUILink>
            ))}
        </Stack>
    );
};

export default Utilities;
