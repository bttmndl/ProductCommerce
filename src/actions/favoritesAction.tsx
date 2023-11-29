

import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  FavoritesActionTypes,
} from "../types/favoritesTypes";

// Action Creators
export const addToFavorites = (productId: number): FavoritesActionTypes => ({
  type: ADD_TO_FAVORITES,
  payload: productId,
});

export const removeFromFavorites = (
  productId: number
): FavoritesActionTypes => ({
  type: REMOVE_FROM_FAVORITES,
  payload: productId,
});
