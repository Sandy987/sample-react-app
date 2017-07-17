import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { combineReducers } from 'redux-immutable';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import reducers from 'ducks';
import Home from 'scenes/Home';
import Widgets from 'scenes/Widgets';
import './index.css';

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/widgets">Widgets</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/widgets" component={Widgets} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
