import { Link, Stack, Typography, List, ListItem } from '@mui/material';

const Downloads = () => {
    return (
        <Stack>
            <Typography variant='h6'>Download for Free</Typography>
            <List>
                <ListItem>
                    <Link
                        href='https://www.origin.com/irl/en-us/store/apex/apex'
                        underline='hover'
                    >
                        PC (Origin)
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        href='https://store.steampowered.com/app/1172470/Apex_Legends/'
                        underline='hover'
                    >
                        PC (Steam)
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        href='https://www.microsoft.com/en-us/p/apex-legends/bv9ml45j2q5v'
                        underline='hover'
                    >
                        Xbox
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        href='https://store.playstation.com/en-us/product/UP0006-CUSA12540_00-APEXLEGENDRSPWN1'
                        underline='hover'
                    >
                        PlayStation
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        href='https://www.nintendo.com/games/detail/apex-legends-switch/'
                        underline='hover'
                    >
                        Nintendo Switch
                    </Link>
                </ListItem>
            </List>
        </Stack>
    );
};

export default Downloads;
