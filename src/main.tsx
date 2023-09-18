import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import './index.css';
import './App.css';
import { HashRouter } from 'react-router-dom';

let root = document.getElementById('root');

if (!root) {
    root = document.createElement('div');

    root.id = 'root';

    window.document.body.appendChild(root);
}

ReactDOM.createRoot(root).render(
    <HashRouter>
        <App />
    </HashRouter>,
);
