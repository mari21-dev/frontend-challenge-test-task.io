import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter basename={process.env.PUBLIC_URL}>
                <App/>
            </HashRouter>
        </Provider>
    </React.StrictMode>
);