import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const provider = <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
</Provider>;

ReactDOM.render(provider, document.querySelector('.container'));
