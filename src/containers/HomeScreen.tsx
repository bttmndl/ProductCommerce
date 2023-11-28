import React, { useEffect, useLayoutEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productAction";
import { RootState } from "../types";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { ThDispatch } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/NavigationTypes";
import Header from "../components/Header";
import Search from "../components/Search";

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch<ThDispatch>();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Header cartItems={5} />,
    });
  }, [navigation]);

  const handleProductPress = (productId) => {
    // Log to check if the function is getting called
    console.log("handleProductPress called");

    // Navigate using react-navigation to ProductDetails
    navigation.navigate("ProductDetails", productId);
  };

  return (
    <View>
      <Search placeholder={"Search Products or Store"} />

      <View
        style={{ backgroundColor: "#2A4BA0", height: 48, flexDirection: "row" }}
      >
        <View style={{ width: "48%", marginLeft: 16 }}>
          <Text style={{ color: "grey", fontSize: 12 }}>DELIVERY TO</Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            Green Way 300 Sylhet
          </Text>
        </View>

        <View style={{ width: "48%", alignItems: "flex-end" }}>
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ color: "grey", fontSize: 12 }}>WITHIN</Text>
            <Text style={{ color: "white", fontSize: 16 }}>1 Hour</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.bannerCard}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View
              style={{
                marginLeft: 8,
                flexDirection: "row",
                backgroundColor: "#F9B023",
                height: 156,
                width: 280,
                borderRadius: 8,
              }}
            >
              <View style={{ width: "50%" }}>
                <ProductCard product={item} onPress={handleProductPress} showFav={false}/>
              </View>
              <View style={{ width: "50%", paddingLeft: 2 }}>
                <Text style={{ color: "white", fontSize: 20 }}>Get</Text>
                <Text
                  style={{ color: "white", fontSize: 32, fontWeight: "bold" }}
                >
                  50% OFF
                </Text>
                <Text style={{ color: "white" }}>first 3 order</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={{ marginLeft: 16, marginTop: 8 }}>
        <Text style={{ fontSize: 32 }}>Recommended</Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={{ flexDirection: "row", marginTop: 12 }}>
              <ProductCard product={item} onPress={handleProductPress} showFav={true}/>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    margin: 16,
    justifyContent: "space-around",
    padding: 16,
  },
  bannerCard: {
    marginTop: 24,
  },
});
export default HomeScreen;
