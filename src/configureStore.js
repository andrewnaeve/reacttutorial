import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

const enhancer = composeWithDevTools(applyMiddleware(epicMiddleware));

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  epicMiddleware.run(rootEpic);
  return store;
}
