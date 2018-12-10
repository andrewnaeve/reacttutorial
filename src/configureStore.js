import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
//import { persistState } from 'redux-devtools';
import rootReducer from './reducers';
import { rootEpic } from './epics';
//import DevTools from '../containers/DevTools';
const epicMiddleware = createEpicMiddleware();

const enhancer = compose(applyMiddleware(epicMiddleware));

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  epicMiddleware.run(rootEpic);

  //   // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  //   if (module.hot) {
  //     module.hot.accept('../reducers', () =>
  //       store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
  //     );
  //   }

  return store;
}
