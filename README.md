# ProductCommerce
React Native Ecommerce shop


![image](https://github.com/bttmndl/ProductCommerce/assets/8470682/66667c28-6a90-446d-82b6-60eff277860a)


Tech Stack : 
React Native
Typescript
Redux (state management)

Forlder Structre:
project-root
│
├── src
│   ├── actions
│   │   ├── cartActions.ts
│   │   ├── favoritesActions.ts
│   │   └── productActions.ts
|   |   └── productItemActions.ts
│   ├── components
│   │   ├── CartItem.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductDetails.tsx
│   │   ├── CartStructure.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   │   ├── ImageCarousel.tsx
│   │   ├── RoundedButton.tsx
│   │   └── Search.tsx
│   │   └── RenderFavoriteItem.tsx
│   ├── constants
│   │   ├── actionTypes.ts
│   │   └── routes.ts
│   ├── containers
│   │   ├── CartScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   └── ProductDetailsScreen.tsx
│   │   └── FavoriteScreen.tsx
│   ├── reducers
│   │   ├── cartReducer.ts
│   │   ├── favoritesReducer.ts
│   │   └── productReducer.ts
│   │   └── productItemReducer.ts
│   ├── store
│   │   └── configureStore.ts
│   ├── types
│   │   ├── cartActionTypes.ts
│   │   ├── favoritesTypes.ts
│   │   └── productTypes.ts
│   │   └── productItemTypes.ts
│   │   ├── NavigationTypes.ts
│   │   ├── Index.ts
│   ├── utils
│   │   ├── api.ts
│   └── App.tsx
│
├── __tests__
│   ├── cart.test.ts
│   ├── favorites.test.ts
│   └── product.test.ts
│
├── .gitignore
├── tsconfig.json
└── package.json
