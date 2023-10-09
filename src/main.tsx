import ReactDOM from 'react-dom/client';
import '@styles/index.css';
import '@/i18n/config';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';

let root = document.getElementById('root');

if (!root) {
    root = document.createElement('div');

    root.id = 'root';

    window.document.body.appendChild(root);
}

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
