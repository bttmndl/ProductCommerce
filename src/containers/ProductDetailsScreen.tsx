import React, { useEffect } from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { RootState, ThDispatch } from "../types";
import { getProductItem } from "../actions/ProductItemAction";
import { useSelector } from "react-redux";
import ImageCarousel from "../components/ImageCarousel";
import RoundedButton from "../components/RoundedButton";

interface ProductDetailsProps {
  route: {
    params?: number;
  };
  navigation: {
    navigate: (screenName: string) => void;
  };
}

const ProductDetailsScreen: React.FC<ProductDetailsProps> = ({
  route,
  navigation,
}) => {
  
  const productId = route.params;

  const dispatch = useDispatch<ThDispatch>();
  const productItem = useSelector(
    (state: RootState) => state.productItem.product
  );

  useEffect(() => {
    dispatch(getProductItem(productId));
  }, [dispatch, productId]);
  
  const productImages = productItem?.images || [];
  const productTitle = productItem?.title || "";
  const productDescription = productItem?.description || "";
  const productPrice = productItem?.price || 0;

  const handleAddToCart = () => {
    
    console.log("Product added to cart:", productItem);
  };

  const handleAddToFavorites = () => {
    
    console.log("Product added to favorites:", productItem);
  };

  return (
    <ScrollView>
      <Text style={{ fontSize: 30, fontWeight: "bold", margin: 10 }}>
        {productTitle}
      </Text>
      <ImageCarousel images={productImages} />

      <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 12 }}>
        ${productPrice.toFixed(2)}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 16,
        }}
      >
        {/* Add to Cart Button */}
        <RoundedButton title="Add to Cart" onPress={handleAddToCart} />

        {/* Add to Favorites Button */}
        <RoundedButton title="Buy Now" onPress={handleAddToFavorites} />
      </View>

      <Text
        style={{
          fontSize: 24,
          color: "black",
          fontWeight: "bold",
          marginTop: 16,
        }}
      >
        Details
      </Text>
      <Text style={{ fontSize: 16, color: "gray" }}>{productDescription}</Text>
    </ScrollView>
  );
};

export default ProductDetailsScreen;
