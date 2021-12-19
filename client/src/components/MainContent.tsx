import { Grid } from '@mui/material';
import Feed from './Feed';
import Sidebar from './Sidebar';

const MainContent = () => {
    return (
        <Grid container sx={{color: '#fff'}}>
            <Grid item md={10}>
                <Feed />
            </Grid>
            <Grid item md={2}>
                <Sidebar />
            </Grid>
        </Grid>
    );
};

export default MainContent;
