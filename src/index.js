import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/login';
import Game from './components/game';
import Pregame from './components/pregame';
import reducers from './reducers';



ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
          <div>
              <Switch>
                  <Route path="/" component={Login} exact={true}/>
                  <Route path="/game" component={Game} /> 
                  <Route path="/pregame" component={Pregame} />
              </Switch>
          </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));
