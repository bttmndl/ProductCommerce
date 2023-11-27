import { StackNavigationProp } from "@react-navigation/stack";


type NavigateFunction = (
  routeName: string,
  productId?: number
) => void;

export type Navigation = {
  navigate: NavigateFunction;
};


export type RootStackParamList = {
  Home: undefined;
  ProductDetails: { productId: number}; 
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;