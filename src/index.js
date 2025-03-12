import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HereIAmApp from './App'; // App.js에서 export한 컴포넌트 이름으로 변경
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HereIAmApp />
  </React.StrictMode>
);

reportWebVitals();