import { Link, List, ListItem, Stack, Typography } from '@mui/material';

const QuickLinks = () => {
    return (
        <Stack>
            <Typography variant='h6'>Quick Links</Typography>
            <List>
                <ListItem>
                    <Link underline='hover'>Report a Cheater</Link>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Link underline='hover'>Report a Bug</Link>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Link underline='hover'>Troubleshooting Crashes</Link>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Link underline='hover'>Dev Bug Tracker</Link>
                </ListItem>
            </List>
        </Stack>
    );
};

export default QuickLinks;
