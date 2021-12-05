import Badge from '@mui/material/Badge';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styled from '@mui/system/styled';
import { Box } from '@mui/material';

const ThumbnailImg = styled('img')({
    maxWidth: '10em',
    maxHeight: '10em'
});

const Thumbnail = () => {
    return (
        <Box sx={{ ml: '.5em' }}>
            <Badge badgeContent={<AddCircleIcon />}>
                <ThumbnailImg
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnY6ML8-yTbLPw8qbp_aAMWlgB-4lQIb4_Jw&usqp=CAU'
                    alt='thumbnail'
                />
            </Badge>
        </Box>
    );
};

export default Thumbnail;
