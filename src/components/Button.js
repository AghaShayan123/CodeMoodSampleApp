import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { colors } from '../constatnts'

export default function PrimaryButton({text, onPress}) {
  return (
    <TouchableOpacity 
      style={styles.button}
      activeOpacity= {0.5}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '80%',
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    alignSelf: "center"
  },
  text:{
    color: colors.white,
    textAlign: "center",
    fontSize: 16
  }
})