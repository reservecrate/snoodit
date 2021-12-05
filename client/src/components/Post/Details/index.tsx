import { Stack } from '@mui/material';
import DetailsTop from './DetailsTop';
import DetailsBottom from './DetailsBottom';
import Utilities from './Utilities';

interface IDetails {
    title: string;
    content: string;
    flair: string;
    author: string;
    domain: string;
}

const Details = ({ details }: { details: IDetails }) => {
    const { title, content, flair, author, domain } = details;
    return (
        <Stack sx={{ ml: '.5em' }}>
            <DetailsTop detailsTop={{ flair, title, domain }} />
            <DetailsBottom detailsBottom={{ author }} />
            <Utilities />
        </Stack>
    );
};

export default Details;
