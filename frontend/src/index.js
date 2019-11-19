import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    
    if(localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decoded = jwt_decode(localStorage.jwtToken);

        const preloadedState = {
            session: { isAuthenticated: true, user: decoded }
        };

        store = configureStore(preloadedState);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          store.dispatch(logout());
          window.location.href = '/login';
        }
    } else {
        store = configureStore();
    }
    window.store = store;
    ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});



