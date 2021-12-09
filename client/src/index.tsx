import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const rootElement = document.getElementById('root');

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
