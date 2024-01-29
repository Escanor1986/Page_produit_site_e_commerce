import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './contexts/ThemeProvider';
import { ArticleProvider } from './contexts/ArticleProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ArticleProvider>
        <App />
      </ArticleProvider>
    </ThemeProvider>
  </React.StrictMode>
);
