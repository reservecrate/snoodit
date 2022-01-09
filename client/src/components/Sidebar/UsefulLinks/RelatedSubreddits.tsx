import { Link, List, ListItem, Stack, Typography } from '@mui/material';

const RelatedSubreddits = () => {
    const relatedSubredditsArr = [
        'ApexOutlands',
        'ApexLFG',
        'CompetitiveApex',
        'ApexLore',
        'ApexUniversity',
        'ApexRollouts',
        'Titanfall'
    ];
    return (
        <Stack>
            <Typography variant='h6'>Related Subreddits </Typography>
            <List>
                {relatedSubredditsArr.map((subreddit) => (
                    <ListItem>
                        <Link
                            underline='hover'
                            href={`https://old.reddit.com/r/${subreddit}`}
                        >
                            {subreddit}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
};

export default RelatedSubreddits;
