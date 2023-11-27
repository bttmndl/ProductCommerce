 
// src/reducers/favoritesReducer.ts

import { FavoritesState, FavoritesActionTypes, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../types/favoritesTypes';

const initialState: FavoritesState = {
  products: [],
};

const favoritesReducer = (state = initialState, action: FavoritesActionTypes): FavoritesState => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        products: state.products.filter(productId => productId !== action.payload),
      };

    default:
      return state;
  }
};

export default favoritesReducer;
