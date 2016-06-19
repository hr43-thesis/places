import React from 'react';
import { render } from 'react-dom';
import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import { loadPlaces } from './redux/actions/placesActions';

const store = configureStore();
export const history = syncHistoryWithStore(browserHistory, store);


store.dispatch(loadPlaces());

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
