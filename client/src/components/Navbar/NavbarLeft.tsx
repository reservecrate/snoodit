import { Stack, Chip } from '@mui/material';
import { styled, SxProps } from '@mui/system';

const HeaderImg = styled('img')({
    maxWidth: '2.5em',
    maxHeight: '2.5em',
    borderRadius: '50%'
});

const styles: SxProps = {
    ml: '.25em'
};

const NavbarLeft = () => {
    const labels = ['Hot', 'New', 'Rising', 'Controversial', 'Top', 'Gilded'];

    return (
        <Stack direction='row' alignItems='center'>
            <HeaderImg
                src='https://b.thumbs.redditmedia.com/QdS6aakID6NNGY8jjyFUnAvv1kpAlZmjrV47wCMyKrQ.png'
                alt='header image'
            />
            {labels.map(label => (
                <Chip label={label} variant='outlined' sx={styles} />
            ))}
        </Stack>
    );
};

export default NavbarLeft;
