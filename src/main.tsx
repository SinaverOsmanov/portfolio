import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

let root = document.getElementById('root');

if (!root) {
    root = document.createElement('div');

    root.id = 'root';

    window.document.body.appendChild(root);
}

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
