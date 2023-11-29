import { Product } from "../types/productTypes";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM_QUANTITY,
} from "../types/CartActionTypes";

// Action creators
export const addToCart = (product: Product) =>
  ({
    type: ADD_TO_CART,
    payload: {
      productId: product.id,
      product,
      quantity: 1, 
    },
  } as const);

export const removeFromCart = (productId: number) =>
  ({
    type: REMOVE_FROM_CART,
    payload: productId,
  } as const);

export const updateCartItemQuantity = (productId: number, quantity: number) =>
  ({
    type: UPDATE_CART_ITEM_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  } as const);

// Exporting the action types for type checking
export type CartActions = ReturnType<
  typeof addToCart | typeof removeFromCart | typeof updateCartItemQuantity
>;
