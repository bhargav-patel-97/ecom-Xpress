import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

import { persistStore } from 'redux-persist';

const middlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//Redux persistor fx using localStorage for caching
export const persistor = persistStore(store);
