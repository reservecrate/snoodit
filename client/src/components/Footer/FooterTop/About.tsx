import { Stack, Link, Typography } from '@mui/material';

const About = () => {
    const aboutElements = ['blog', 'about', 'advertising', 'careers'];
    return (
        <Stack sx={{ mx: '1em', my: '.5em' }}>
            <Typography variant='h6' sx={{ color: '#fff' }}>
                about
            </Typography>
            {aboutElements.map(elem => {
                return elem === 'about' ? (
                    <Link href={`https://redditinc.com/`} underline='hover'>
                        {elem}
                    </Link>
                ) : (
                    <Link
                        href={`https://redditinc.com/${elem}`}
                        underline='hover'
                    >
                        {elem}
                    </Link>
                );
            })}
        </Stack>
    );
};

export default About;

/*

return elem === 'about' ? (
                    <Link
                        href={`https://redditinc.com/${elem}`}
                        underline='hover'
                    >
                        {elem}
                    </Link>
                    ) : (
                    <Link href={`https://redditinc.com/`} underline='hover'>
                        {elem}
                    </Link>
                );  
*/
