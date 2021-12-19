import { Stack, Divider } from '@mui/material';
import Downloads from './Downloads';
import PatchNotes from './PatchNotes';
import QuickLinks from './QuickLinks';

const UsefulLinks = () => {
    return (
        <Stack>
            <Downloads />
            <Divider light={true} />
            <PatchNotes />
            <QuickLinks />
        </Stack>
    );
};

export default UsefulLinks;
