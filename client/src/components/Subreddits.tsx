import { useState } from 'react';
import { Link, Stack , Divider} from '@mui/material';

const Subreddits = () => {
    const [subreddits, setSubreddits] = useState([
        'askreddit',
        'gaming',
        'minecraft',
        'apexlegends',
        'programmerhumor',
        'learnprogramming',
        'javascript',
        'apexoutlands',
        'outoftheloop',
        'memes',
        'dankmemes',
        'programming'
    ]);
    return (
        <>
        <Stack
            direction='row'
            justifyContent='space-evenly'
            sx={{
                py: '.5em'
            }}
        >
            {subreddits.map(subreddit => {
                return (
                    <Link
                        href={`https://reddit.com/r/${subreddit}`}
                        underline='hover'
                    >
                        {subreddit}
                    </Link>
                );
            })}
        </Stack>
        <Divider />
        </>
    );
};

export default Subreddits;
