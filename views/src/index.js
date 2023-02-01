import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './test/reportWebVitals';
import Head from "./Head";
import { HelmetProvider } from "react-helmet-async";
import ThemeContextWrapper from "./components/theme/ThemeContextWrapper";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeContextWrapper>
            <HelmetProvider>
                <Head />
            </HelmetProvider>
            <App />
        </ThemeContextWrapper>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
