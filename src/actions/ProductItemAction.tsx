import { Dispatch } from "redux";
import {
  GET_PRODUCT_ITEM_REQUEST,
  GET_PRODUCT_ITEM_SUCCESS,
  GET_PRODUCT_ITEM_FAILURE,
  ProductItemActionTypes,
} from "../types/productItemType";
import { fetchProductItem } from "../utils/api";


export const getProductItem = (productId: number) => {
  return async (dispatch: Dispatch<ProductItemActionTypes>) => {
    try {
      dispatch({ type: GET_PRODUCT_ITEM_REQUEST });

      //fetchProducts is an async function that fetches products from api
      const products = await fetchProductItem(productId);

      dispatch({
        type: GET_PRODUCT_ITEM_SUCCESS,
        payload: products,
      });
    } catch (error: any) {
      dispatch({
        type: GET_PRODUCT_ITEM_FAILURE,
        payload: error.message || "An error occurred while fetching products",
      });
    }
  };
};
