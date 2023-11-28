import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ThDispatch } from "../types";
import { useDispatch } from "react-redux";
import { Product } from "../types/productTypes";
import { removeFromFavorites } from "../actions/favoritesAction";

interface RenderFavoriteItemProps {
  item: Product
}

const RenderFavoriteItem: React.FC<RenderFavoriteItemProps> = ({item}) => {
  const dispatch = useDispatch<ThDispatch>();


  return (
    <View style={styles.container}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <View style={styles.details}>
        <Text>{item.title}</Text>
        <Text>${item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Text
          style={styles.removeButton}
          onPress={() => dispatch(removeFromFavorites(item.id))}
        >
          Remove
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 8,
  },
  details: {
    flex: 1,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#3498db",
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  quantity: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  removeButton: {
    color: "red",
  },
});

export default RenderFavoriteItem;
