import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import './style.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <div className="wrap">
            <App />
        </div>
    </React.StrictMode>
);