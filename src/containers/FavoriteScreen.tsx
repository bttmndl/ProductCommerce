
import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState, ThDispatch } from "../types";
import RenderFavoriteItem from "../components/RenderFavoriteItem";



const FavoriteScreen: React.FC = () => {

  const dispatch = useDispatch<ThDispatch>();

  const favoriteProductsArrayIds = useSelector(
    (state: RootState) => state.favorites.products
  );

  const products = useSelector((state: RootState)=>state.product.products);
  const favoriteProducts = products.filter((product) =>
    favoriteProductsArrayIds.includes(product.id)
  );
  console.log(favoriteProductsArrayIds);
  return (
    <View style={styles.container}>
      {favoriteProducts.length > 0 ? (
        <FlatList
          data={favoriteProducts}
          keyExtractor={(item) => item.toString()}
          renderItem={({item}) => <RenderFavoriteItem item={item} />}
        />
      ) : (
        <Text>No favorite products yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  favoriteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 8,
  },
  removeButton: {
    color: "red",
  },
});

export default FavoriteScreen;
