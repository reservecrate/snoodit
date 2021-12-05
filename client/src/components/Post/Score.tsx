import { useState } from 'react';
import { Stack, IconButton, Chip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Score = ({ score }: { score: number }) => {
    const [scoreState, setScoreState] = useState(score);
    const handleClick = () => {
        setScoreState(scoreState + 1);
    };
    return (
        <Stack alignItems='center' sx={{ ml: '.5em' }}>
            <IconButton aria-label='upvote'>
                <ArrowUpwardIcon />
            </IconButton>
            <Chip label={scoreState} variant='outlined' onClick={handleClick} />
            <IconButton aria-label='downvote'>
                <ArrowDownwardIcon />
            </IconButton>
        </Stack>
    );
};

export default Score;
