import { Link, Stack, Typography, List, ListItem } from '@mui/material';

const PatchNotes = () => {
    return (
        <Stack>
            <Typography variant='h6'>Patch Notes</Typography>
            <List>
                <ListItem>
                    <Link href='' underline='hover'>Current Patch (Dec 7th)</Link>
                </ListItem>
                <ListItem>
                    <Link href='' underline='hover'>Previous Patch Notes</Link>
                </ListItem>
            </List>
        </Stack>
    );
};

export default PatchNotes;
