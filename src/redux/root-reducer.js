import { combineReducers } from 'redux';

//Redux persist lib to store reducer to localStorage
import { persistReducer } from 'redux-persist';

//Reaching out to the actual localStorage on the window
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

//Redux persist config object
const persistConfig = {
    key: 'root',
    storage,
    //reducers to persist goes in the array below
    whitelist: ['cart']

}

//Our root/combined reducer
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer 
});

//passing our root reducer with persist config and fx
export default persistReducer(persistConfig, rootReducer);