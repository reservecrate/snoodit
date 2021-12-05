import { Stack, Chip, Typography, Link } from '@mui/material';

interface IDetailsTop {
    flair: string;
    title: string;
    domain: string;
}

const DetailsTop = ({ detailsTop }: { detailsTop: IDetailsTop }) => {
    const { flair, title, domain } = detailsTop;
    return (
        <Stack direction='row' alignItems='center'>
            <Chip label={flair} />
            <Typography variant='h6' sx={{ ml: '.25em' }}>
                {title}
            </Typography>
            <Link
                href='old.reddit.com'
                underline='hover'
                sx={{ ml: '.25em', fontSize: '.75rem' }}
            >
                ({domain})
            </Link>
        </Stack>
    );
};

export default DetailsTop;
