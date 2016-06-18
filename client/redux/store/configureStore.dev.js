import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const enhancers = compose(
  applyMiddleware(thunk, reduxImmutableStateInvariant()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default function configureStore(intialState) {
  return createStore(
    rootReducer,
    intialState,
    enhancers,
  );
}
