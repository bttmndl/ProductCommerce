import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import HomeScreen from "./src/containers/HomeScreen";
import ProductDetailsScreen from "./src/containers/ProductDetailsScreen";
import { Provider } from "react-redux";
import store from "./src/store/configureStore";
import Footer from "./src/components/Footer";
import CartScreen from "./src/containers/CartScreen";
import FavoriteScreen from "./src/containers/FavoriteScreen";

import {
  createStackNavigator,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetailsScreen}
            />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Favorite" component={FavoriteScreen} />
          </Stack.Navigator>
          <Footer />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
