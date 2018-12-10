import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';
import { rootEpic } from './epics';
const epicMiddleware = createEpicMiddleware();

const enhancer = compose(applyMiddleware(epicMiddleware));

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  epicMiddleware.run(rootEpic);
  return store;
}
