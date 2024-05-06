import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import vacancyList from "./Vacancies";

import './style.scss';
import { StoreType } from './types';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const initialState: StoreType = {
    vacancies: vacancyList,
    selectedVacancy: 0
}

const store = createStore(rootReducer, initialState);

root.render(

    <React.StrictMode>
        <Provider store={store}>
            <div className="wrap">
                <App />
            </div>
        </Provider>
    </React.StrictMode>

);