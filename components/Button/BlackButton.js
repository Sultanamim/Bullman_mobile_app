import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { globalstyle } from "../../styles/globalstyle";

const BlackButton = ({ text, onclick, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onclick}>
      <LinearGradient
        colors={["#424242", "#000000"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={[styles.button, style && style]}
      >
        <Text
          style={[globalstyle.text, styles.btnText, textStyle && textStyle]}
        >
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: 3,
    //marginHorizontal: 10,
  },
  btnText: {
    color: "#fff",
    fontFamily: "Mada_ExtraBold",
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default BlackButton;