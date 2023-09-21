import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n/config';
import './index.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

let root = document.getElementById('root');

if (!root) {
    root = document.createElement('div');

    root.id = 'root';

    window.document.body.appendChild(root);
}

ReactDOM.createRoot(root).render(
    <BrowserRouter basename={'/portfolio'}>
        <App />
    </BrowserRouter>
);
