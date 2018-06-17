import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import History from './lib/history';
// import TroupActions from './state/troup/troup.actions';
import { IndexEpics, IndexReducer } from './state';
let epicMiddleware = createEpicMiddleware(IndexEpics);

let middleware = applyMiddleware(
  routerMiddleware(History),
  epicMiddleware
);
let devtoolsExtensions =
    window['devToolsExtension'] && window['devToolsExtension']();
let Store = createStore(connectRouter(History)(IndexReducer), devtoolsExtensions, middleware);

// Store.dispatch({ type: TroupActions.TROUP_INIT });

export default Store;
