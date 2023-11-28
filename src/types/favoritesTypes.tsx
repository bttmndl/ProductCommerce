// src/types/favoritesTypes.ts

export interface FavoritesState {
  products: number[]; // Array of product IDs in favorites
}

// Define action types for favorites actions
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

// Action interfaces
interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES;
  payload: number; // productId
}

interface RemoveFromFavoritesAction {
  type: typeof REMOVE_FROM_FAVORITES;
  payload: number; // productId
}

// Combine all action types into a union type
export type FavoritesActionTypes =
  | AddToFavoritesAction
  | RemoveFromFavoritesAction;
