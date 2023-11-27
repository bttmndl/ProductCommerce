import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Product } from "../types/productTypes";
import { FontAwesome } from "@expo/vector-icons";

interface ProductCardProps {
  product: Product;
  onPress: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  const [favorite, setFavorite] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress(product.id)} style={styles.card}>

        <Image source={{ uri: product?.thumbnail }} style={styles.image} />

        <View style={styles.details}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "48%" }}>
              <Text>${product?.price}</Text>
            </View>

            <View style={{ width: "48%", alignItems: "flex-end" }}>
              <View
                style={{
                  backgroundColor: "#2A4BA0",
                  width: 32,
                  height: 24,
                  borderRadius: 48,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity style={{}} onPress={() => {}}>
                  <Text style={{ color: "white" }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <Text>{product?.title}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => setFavorite(true)}
        >
          <FontAwesome name="heart" size={20} color={!favorite ? "white" : "red"} />
        </TouchableOpacity>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"64%",
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    height: 150,
  },
  details: {
    padding: 8,
  },
  favoriteButton: {
    position: "absolute",
    top: 4,
    left: 4,
    padding: 8,
  },
});

export default ProductCard;
