import { useState, useEffect, useRef } from 'react';
import { Grid, Card, CardActionArea, Stack } from '@mui/material';
import Score from './Score';
import Thumbnail from './Thumbnail';
import Details from './Details';

interface IPost {
    title: string;
    content: string;
    flair: string;
    author: string;
    domain: string;
    score: number;
}

const Post = ({ post }: { post: IPost }) => {
    // const history = useHistory();
    const elementRef = useRef();
    const { title, content, flair, author, domain, score } = post;
    // const routeChange = () => {
    //     let path = `newPath`;
    //     history.push(path);
    // };
    const [mouseHover, setMouseHover] = useState(false);
    useEffect(() => {
        if (mouseHover) {
        }
    }, [mouseHover]);
    return (
        <Grid
            item
            onMouseEnter={() => setMouseHover(true)}
            onMouseLeave={() => setMouseHover(false)}
            // ref={elementRef}
        >
            <Card sx={{ bgcolor: '#2D3748', color: '#fff' }}>
                <CardActionArea>
                    <Stack direction='row' alignItems='center'>
                        <Score score={score} />
                        <Thumbnail />
                        <Details
                            details={{ title, content, flair, author, domain }}
                        />
                    </Stack>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Post;
