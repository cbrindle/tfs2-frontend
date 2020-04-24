import React, { Component } from 'react';
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './redux/store/store';
import Spinner from './Components/Spinner/Spinner';
import MainRouter from './MainRouter';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <React.Suspense fallback={<Spinner />}>
            <MainRouter />
          </React.Suspense>
        </Router>
      </Provider>
    )
  }
}