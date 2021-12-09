import '../App.css';
import '@fontsource/roboto/400.css';
import Subreddits from './Subreddits';
import Banner from './Banner';
import Navbar from './Navbar';
import Feed from './Feed';
import Footer from './Footer';

const App = () => {
    return (
        <div className='App'>
            <Subreddits />
            {/* <Banner /> */}
            <Navbar />
            <Feed />
            <Footer />
        </div>
    );
};

export default App;
