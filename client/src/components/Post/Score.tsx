import { useState } from 'react';
import { Stack, IconButton, Chip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Score = ({ score }: { score: number }) => {
    const [vote, setVote] = useState('');
    const [scoreState, setScoreState] = useState(score);
    const handleUpvote = () => {
        if (!vote || vote === 'down') {
            setScoreState(score + 1);
            setVote('up');
        } else {
            setScoreState(score);
            setVote('');
        }
    };
    const handleDownvote = () => {
        if (!vote || vote === 'up') {
            setScoreState(score - 1);
            setVote('down');
        } else {
            setScoreState(score);
            setVote('');
        }
    };
    return (
        <Stack alignItems='center' sx={{ ml: '.5em' }}>
            <IconButton aria-label='upvote' onClick={handleUpvote}>
                <ArrowUpwardIcon sx={{ color: '#E2E8F0' }} />
            </IconButton>
            {/* <IconButton> */}
            <Chip
                label={scoreState}
                variant='outlined'
                sx={{ color: '#E2E8F0' }}
            />
            {/* </IconButton> */}

            <IconButton aria-label='downvote' onClick={handleDownvote}>
                <ArrowDownwardIcon sx={{ color: '#E2E8F0' }} />
            </IconButton>
        </Stack>
    );
};

export default Score;
