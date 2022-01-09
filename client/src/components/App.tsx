import '../App.css';
import '@fontsource/roboto/400.css';
import Subreddits from './Subreddits';
import Banner from './Banner';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Footer from './Footer';
import { Stack } from '@mui/material';

const App = () => {

    return (
        <Stack className='App'>
            <Subreddits />
            {/* <Banner /> */}
            <Navbar />
            <MainContent />
            <Footer />
        </Stack>
    );
};

export default App;
