import {ThunkDispatch} from 'redux-thunk';
import {CartState} from './cartTypes';
import {FavoritesState} from './favoritesTypes';
import {ProductState} from './productTypes';
import { AnyAction } from 'redux';
import { ProductItemState } from './productItemType';

export interface RootState {
  cart: CartState;
  product: ProductState;
  favorites: FavoritesState;
  productItem: ProductItemState
}

export type ThDispatch = ThunkDispatch<RootState, any, AnyAction>;
