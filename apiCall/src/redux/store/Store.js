// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Imports: Redux Root Reducer
import rootReducer from '../reducer';

// Imports: Redux Root Saga
import rootSaga from '../saga';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export default store;


