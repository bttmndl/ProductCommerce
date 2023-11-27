// src/types/cartTypes.ts

export interface CartItem {
  productId: number;
  quantity: number;
  // Include other properties as needed
}

export interface CartState {
  items: CartItem[];
}

// Define action types for cart actions
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY';

// Action interfaces
interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: CartItem;
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: number; // productId
}

interface UpdateCartItemQuantityAction {
  type: typeof UPDATE_CART_ITEM_QUANTITY;
  payload: {
    productId: number;
    quantity: number;
  };
}

// Combine all action types into a union type
export type CartActionTypes =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateCartItemQuantityAction;
