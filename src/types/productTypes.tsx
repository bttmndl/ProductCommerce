

// Define action types
export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';


// Define product data structure
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

// Define state types
export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// Define action interfaces
interface GetProductIRequestAction {
  type: typeof GET_PRODUCTS_REQUEST;
}

interface GetProductSuccessAction {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: Product[];
}

interface GetProductFailureAction {
  type: typeof GET_PRODUCTS_FAILURE;
  payload: string; // Error message
}

export type ProductActionTypes =
  | GetProductIRequestAction
  | GetProductSuccessAction
  | GetProductFailureAction;
