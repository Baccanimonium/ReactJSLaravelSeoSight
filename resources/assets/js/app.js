/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import App from "./components/App";
require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index'

 import '../css/fonts.css'
 import '../css/crumina-fonts.css'
 import '../css/normalize.css'
 import '../css/grid.css'
 import '../css/base.css'
 import '../css/blocks.css'
 import '../css/layouts.css'
 import '../css/modules.css'
 import '../css/widgets-styles.css'
 import '../css/swiper.min.css'
 import '../css/primary-menu.css'
 import '../css/magnific-popup.css'
import './style.css'
// import reducers from 'reducers'


import {Route} from 'react-router'
// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


// const history = createHistory()
// const middleware = routerMiddleware(history)
// const store = createStore(combineReducers(reducers), applyMiddleware(thunk, middleware));
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
       <App/>
    </Provider>,

    document.getElementById('root')
);

{/*<ConnectedRouter history={history}>*/}
{/*<Route component={Phones}>*/}
{/*/!*<Route path="/" component={Phones}/>*!/*/}
{/*</Route>*/}
{/*</ConnectedRouter>*/}

