import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CartItem } from "../types/CartActionTypes";
import { removeFromCart, updateCartItemQuantity } from "../actions/cartAction";
import { ThDispatch } from "../types";
import { useDispatch } from "react-redux";

interface CartItemProps {
  item: CartItem;
}

const CartStructure: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch<ThDispatch>();
  const { product, quantity } = item;

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(updateCartItemQuantity(product.id, -1));
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

  const handleIncrease = () => {
    dispatch(updateCartItemQuantity(product.id, 1));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <View style={styles.details}>
        <Text>{product.title}</Text>
        <Text>${product.price.toFixed(2)}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={handleDecrease}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={handleIncrease}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
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
});

export default CartStructure;
