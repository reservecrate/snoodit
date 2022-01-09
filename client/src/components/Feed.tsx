import { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import Post from './Post';

interface IPost {
    title: string;
    content: string;
    flair: string;
    author: string;
    domain: string;
    score: number;
    comments: string[];
}

const Feed = () => {
    const [posts, setPosts] = useState<IPost[]>([
        {
            title: 'unknown',
            content: 'unknown',
            flair: 'unknown',
            domain: 'reddit.com',
            author: 'unknown',
            score: 0,
            comments: []
        }
    ]);
    useEffect(() => {
        fetch('http://localhost:3001')
            .then((res) => res.json())
            .then((postsData) => setPosts(postsData));
    }, []);

    return (
        <Stack>
            {posts.map((post) => (
                <Post post={post} />
            ))}
        </Stack>
    );
};

export default Feed;
