// src/reducers/cartReducer.ts

import {
  CartState,
  CartActionTypes,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM_QUANTITY,
} from "../types/CartActionTypes";

const initialState: CartState = {
  items: [],
};

const cartReducer = (
  state = initialState,
  action: CartActionTypes
): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the product is already in the cart
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingItem) {
        // If the item is already in the cart, update its quantity
        return {
          ...state,
          items: state.items.map((item) =>
            item.product.id === action.payload.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If the item is not in the cart, add it
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== action.payload),
      };

    case UPDATE_CART_ITEM_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, quantity: item.quantity+action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
