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
    comments: string[];
}

const Details = ({ details }: { details: IDetails }) => {
    const { title, content, flair, author, domain, comments } = details;
    return (
        <Stack sx={{ ml: '.5em' }}>
            <DetailsTop detailsTop={{ flair, title, domain }} />
            <DetailsBottom detailsBottom={{ author }} />
            <Utilities comments={comments} />
        </Stack>
    );
};

export default Details;
