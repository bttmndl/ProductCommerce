// src/store/configureStore.ts

import {createStore, combineReducers, applyMiddleware} from 'redux';
import cartReducer from '../reducers/cartReducer';
import favoritesReducer from '../reducers/favoriteReducer';
import productReducer from '../reducers/productReducer';
import {RootState} from '../types';
import thunk from "redux-thunk";
import productItemReducer from '../reducers/ProductItemReducer';

const rootReducer = combineReducers<RootState>({
  cart: cartReducer,
  favorites: favoritesReducer,
  product: productReducer,
  productItem: productItemReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
