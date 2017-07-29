import {render} from 'react-dom';
import React from 'react';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './redux/store';
import routes from './routes';

const appContainer = document.getElementById('app');


const router = <Provider store={store}><Router history={browserHistory} routes={routes} /></Provider>


render(router, appContainer);
