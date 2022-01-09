import { Stack, Divider } from '@mui/material';
import Downloads from './Downloads';
import PatchNotes from './PatchNotes';
import QuickLinks from './QuickLinks';
import RelatedSubreddits from './RelatedSubreddits';

const UsefulLinks = () => {
    return (
        <Stack>
            <Downloads />
            <Divider />
            <PatchNotes />
            <Divider />
            <QuickLinks />
            <Divider />
            <RelatedSubreddits />
        </Stack>
    );
};

export default UsefulLinks;
