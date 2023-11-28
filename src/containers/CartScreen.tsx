import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import CartItem from '../components/CartStructure'
import { useSelector } from 'react-redux';
import { RootState } from '../types';

const CartScreen: React.FC = () => {

  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  // Dummy values for delivery and total
  const delivery = 5.99;
  const total = calculateSubtotal() + delivery;

  return (
    <View style={styles.container}>
      {/* Cart items */}
      <View style={styles.cartList}>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.product.id.toString()}
          renderItem={({ item }) => <CartItem item={item} />}
        />
      </View>

      {/* Subtotal, delivery, and total */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal:</Text>
          <Text style={styles.summaryValue}>
            ${calculateSubtotal().toFixed(2)}
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery:</Text>
          <Text style={styles.summaryValue}>${delivery.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={[styles.summaryLabel, styles.totalLabel]}>Total:</Text>
          <Text style={[styles.summaryValue, styles.totalValue]}>
            ${total.toFixed(2)}
          </Text>
        </View>

        {/* Proceed to Checkout button */}
        <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.buttonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  cartList: {
    height: 300,
  },
  summaryContainer: {
    backgroundColor: "#F8F9FB",
    paddingHorizontal: 16,
    borderRadius: 20,
    paddingVertical: 4,
    height:180
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "flex-end",
  },
  totalLabel: {
    color: "#2A4BA0", 
  },
  totalValue: {
    color: "#2A4BA0", 
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 8,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  checkoutButton: {
    backgroundColor: "#2A4BA0",
    padding: 16,
    borderRadius: 64,
    alignItems: "center",
    marginTop:16
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CartScreen;
