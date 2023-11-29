

import {
  ProductItemState,
  GET_PRODUCT_ITEM_REQUEST,
  GET_PRODUCT_ITEM_SUCCESS,
  GET_PRODUCT_ITEM_FAILURE,
  ProductItemActionTypes,
} from "../types/productItemType";

const initialState: ProductItemState = {
  product: {
    id: 0,
    title: "no",
    description: "",
    price: 0,
    images: [],
  },
  loading: false,
  error: null,
};

const productItemReducer = (
  state = initialState,
  action: ProductItemActionTypes
): ProductItemState => {
  switch (action.type) {
    case GET_PRODUCT_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_PRODUCT_ITEM_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: null,
      };

    case GET_PRODUCT_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productItemReducer;
