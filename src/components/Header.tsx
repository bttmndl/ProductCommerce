import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/NavigationTypes";

interface HeaderProps {
  cartItems: number;
}

const Header: React.FC<HeaderProps> = ({ cartItems }) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const goToCartScreen = ()=>{
    navigation.navigate("Cart");
  }
  return (
    <View style={styles.headerContainer}>
      <View style={styles.textContainer}><Text style={styles.titleColor}>Hey, Rahul</Text></View>
      <View style={styles.container}>
        <TouchableOpacity onPress={goToCartScreen}>
          <FontAwesome name="shopping-bag" size={28} color="white" />
        </TouchableOpacity>


        <View style={styles.cartBadge}>
          <Text style={styles.cartBadgeText}>{cartItems}</Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#2A4BA0", // Header background color
    width: "150%",
    height: "100%",
  },
  textContainer: {
    width: "50%",
    alignItems: "center",
  },
  titleColor: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    paddingLeft: 64,
    paddingTop: 12,
  },
  container: {
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: "50%",
  },
  greetingText: {
    fontSize: 124,
    color: "#fff", // Text color
  },
  cartBadge: {
    backgroundColor: "#e74c3c", // Badge background color
    borderRadius: 10,
    paddingHorizontal: 5,
    position: "absolute",
    top: 12,
    right: 8,
  },
  cartBadgeText: {
    color: "#fff", // Badge text color
    fontWeight: "bold",
  },
});

export default Header;
