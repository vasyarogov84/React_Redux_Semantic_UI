import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/login';
import Game from './components/game';
import Pregame from './components/pregame';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



ReactDOM.render(
    <Provider store={createStore(reducers,devTools(applyMiddleware(reduxThunk)))}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Login} exact={true} />
                    <Route path="/game" component={Game} />
                    <Route path="/pregame" component={Pregame} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));
