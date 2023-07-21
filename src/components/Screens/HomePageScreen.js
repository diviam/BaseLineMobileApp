// HomePageScreen.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
// let welcomeImg = require("../../../assets/welcome.svg");
import WelcomeImg from "../../../assets/stars.svg";
import { ServiceCard } from "./ServiceCard";

const HomePageScreen = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.header}>
        Welcome to the
        <Text style={styles.colorRed}> Baseline IT Web Development</Text>
      </Text>
      <ServiceCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  colorRed: {
    color: "#bb372a",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
});

export default HomePageScreen;
