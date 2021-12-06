import { useState } from 'react';
import { Stack, Tooltip, IconButton, Chip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Score = ({ score }: { score: number }) => {
    const [vote, setVote] = useState('');
    const [scoreState, setScoreState] = useState(score);
    const handleUpvote = () => {
        if (!vote || vote === 'down') {
            setScoreState(score + 1);
            setVote('up');
        }
    };
    const handleDownvote = () => {
        if (!vote || vote === 'up') {
            setScoreState(score - 1);
            setVote('down');
        }
    };
    return (
        <Stack alignItems='center' sx={{ ml: '.5em' }}>
            <Tooltip title='upvote' onClick={handleUpvote}>
                <IconButton aria-label='upvote'>
                    <ArrowUpwardIcon />
                </IconButton>
            </Tooltip>
            {/* <IconButton> */}
            <Chip label={scoreState} variant='outlined' />
            {/* </IconButton> */}

            <Tooltip title='downvote' onClick={handleDownvote}>
                <IconButton aria-label='downvote'>
                    <ArrowDownwardIcon />
                </IconButton>
            </Tooltip>
        </Stack>
    );
};

export default Score;
