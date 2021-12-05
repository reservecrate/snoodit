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
    const { title, content, flair, author, domain, score } = post;
    // const handleMouseOver = (
    //     e: React.MouseEvent<HTMLDivElement, MouseEvent>
    // ) => {
    //     console.log('gt');
    //     e.target.
    // };
    return (
        <Grid item>
            <Card>
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
