import { Dispatch } from "redux";
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  ProductActionTypes,
} from "../types/productTypes";
import { fetchProducts } from "../utils/api";

export const getProducts = () => {
  return async (dispatch: Dispatch<ProductActionTypes>) => {
    try {
      dispatch({ type: GET_PRODUCTS_REQUEST });

      //fetchProducts 
      const products = await fetchProducts();

      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: products,
      });
    } catch (error: any) {
      dispatch({
        type: GET_PRODUCTS_FAILURE,
        payload: error.message || "An error occurred while fetching products",
      });
    }
  };
};
