import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Component/Navbar.css'
import './Component/Table.css'
import './Component/LoginPage.css'
import './Component/Card.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
<link href="https://fonts.googleapis.com/css2?family=Teko&display=swap" rel="stylesheet"></link> 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
