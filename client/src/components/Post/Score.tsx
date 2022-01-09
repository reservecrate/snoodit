import { useState } from 'react';
import { Stack, IconButton, Chip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Score = ({ score }: { score: number }) => {
    const [vote, setVote] = useState('');
    const [scoreState, setScoreState] = useState(score);
    const [colorState, setColorState] = useState('#E2E8F0');
    const handleUpvote = () => {
        if (!vote || vote === 'down') {
            setScoreState(score + 1);
            setVote('up');
            setColorState('#0FFF50');
        } else {
            setScoreState(score);
            setVote('');
            setColorState('#E2E8F0');
        }
    };
    const handleDownvote = () => {
        if (!vote || vote === 'up') {
            setScoreState(score - 1);
            setVote('down');
            setColorState('#DC143C');
        } else {
            setScoreState(score);
            setVote('');
            setColorState('#E2E8F0');
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
                sx={{ color: colorState }}
            />
            {/* </IconButton> */}

            <IconButton aria-label='downvote' onClick={handleDownvote}>
                <ArrowDownwardIcon sx={{ color: '#E2E8F0' }} />
            </IconButton>
        </Stack>
    );
};

export default Score;