
export const GET_PRODUCT_ITEM_REQUEST = "GET_PRODUCT_ITEM_REQUEST";
export const GET_PRODUCT_ITEM_SUCCESS = "GET_PRODUCT_ITEM_SUCCESS";
export const GET_PRODUCT_ITEM_FAILURE = "GET_PRODUCT_ITEM_FAILURE";

export interface ProductItem {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

// Define state types
export interface ProductItemState {
  product: ProductItem;
  loading: boolean;
  error: string | null;
}

// Define action interfaces
interface GetProductItemRequestAction {
  type: typeof GET_PRODUCT_ITEM_REQUEST;
}

interface GetProductItemSuccessAction {
  type: typeof GET_PRODUCT_ITEM_SUCCESS;
  payload: ProductItem;
}

interface GetProductItemFailureAction {
  type: typeof GET_PRODUCT_ITEM_FAILURE;
  payload: string; // Error message
}

export type ProductItemActionTypes =
  | GetProductItemRequestAction
  | GetProductItemSuccessAction
  | GetProductItemFailureAction;
