import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Product } from "../types/productTypes";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { ThDispatch } from "../types";
import { addToCart } from "../actions/cartAction";
import { addToFavorites, removeFromFavorites } from "../actions/favoritesAction";

interface ProductCardProps {
  product: Product;
  onPress: (productId: number) => void;
  showFav: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress, showFav }) => {
  const [favorite, setFavorite] = useState<boolean>(false)

  const dispatch = useDispatch<ThDispatch>();

  const handleFavorite =()=>{
    
    if(!favorite){
      dispatch(addToFavorites(product.id));
    }else{
      dispatch(removeFromFavorites(product.id));
    }
    setFavorite(p=>!p)
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <TouchableOpacity onPress={() => onPress(product.id)}>
          <Image source={{ uri: product?.thumbnail }} style={styles.image} />
        </TouchableOpacity>

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
                <TouchableOpacity
                  style={{}}
                  onPress={() => {
                    dispatch(addToCart(product));
                  }}
                >
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
          onPress={handleFavorite}
        >
          {showFav && (
            <FontAwesome
              name="heart"
              size={20}
              color={!favorite ? "white" : "red"}
            />
          )}
        </TouchableOpacity>
      </View>
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
