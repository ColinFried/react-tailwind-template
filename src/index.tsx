import React from 'react';
import ReactDOM from 'react-dom/client';
import './_utils/_styles/index.css';
import App from './app/page';
import reportWebVitals from './_utils/_configs/reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
