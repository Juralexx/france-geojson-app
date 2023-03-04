import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './test/reportWebVitals';
import Head from "./Head";
import { HelmetProvider } from "react-helmet-async";
import ThemeContextWrapper from "./components/theme/ThemeContextWrapper";
import GlobalStyles from "./styles/GlobalStyles";
import './styles/font.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <GlobalStyles />
        <ThemeContextWrapper>
            <HelmetProvider>
                <Head />
            </HelmetProvider>
            <App />
        </ThemeContextWrapper>
    </React.StrictMode>
);

reportWebVitals();
