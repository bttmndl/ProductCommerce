import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  FontAwesome5,
  MaterialIcons,
  Entypo,
  Feather,
} from "@expo/vector-icons";


const Footer: React.FC= () => {
  const [selectedTab, setSelectedTab] = useState<string>("home");

  const handleTabPress = (tab: string) => {
    setSelectedTab(tab);
  };



  return (
    <View style={styles.footer}>
      <View style={selectedTab === "home" ? styles.tab : styles.notTab}>
        <FontAwesome5
          name="home"
          size={24}
          color={selectedTab === "home" ? "yellow" : "black"}
          onPress={() => setSelectedTab("home")}
        />
        {selectedTab !== "home" && (
          <Text style={{ marginTop: 8, alignItems: "center" }}>Home</Text>
        )}
      </View>

      <View style={selectedTab === "category" ? styles.tab : styles.notTab}>
        <MaterialIcons
          name="category"
          size={24}
          color={selectedTab === "category" ? "yellow" : "black"}
          onPress={() => setSelectedTab("category")}
        />
        {selectedTab !== "category" && (
          <Text style={{ marginTop: 8, alignItems: "center" }}>Catagories</Text>
        )}
      </View>

      <View style={selectedTab === "heart" ? styles.tab : styles.notTab}>
        <Entypo
          name="heart"
          size={24}
          color={selectedTab === "heart" ? "yellow" : "black"}
          onPress={() => setSelectedTab("heart")}
        />
        {selectedTab !== "heart" && (
          <Text style={{ marginTop: 8, alignItems: "center" }}>Favorites</Text>
        )}
      </View>

      <View style={styles.notTab}>
        <Feather
          name="more-vertical"
          size={24}
          color={selectedTab === "more-vertical" ? "yellow" : "black"}
        />
        {selectedTab !== "more-vertical" && (
          <Text style={{ marginTop: 8, alignItems: "center" }}>more</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingBottom: 16,
    paddingHorizontal: 16,
    height:60
  },
  tab: {
    position: "relative",
    top: -8,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: 64,
    width: 64,
    borderRadius: 30,
    marginBottom: 16,
  },
  notTab: {
    alignItems:"center",
    marginTop: 16
  },
  iconWrapper: {
    alignItems: "center",
  },
});

export default Footer;
