import { useState } from 'react';
import { Link, Stack } from '@mui/material';

const Subreddits = () => {
    const [subreddits, setSubreddits] = useState([
        'askreddit',
        'gaming',
        'minecraft',
        'apexlegends',
        'programmerhumor'
    ]);
    return (
        <Stack direction='row' justifyContent='space-evenly'>
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
    );
};

export default Subreddits;
