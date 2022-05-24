import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, ScrollView, View } from "react-native";
import { Input, Button } from "../components";
import { colors } from '../constatnts';
 
export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    confrimPassword: ""
  });

  const handleChange = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <View style={styles.scroll}>
        <Text style={styles.textWithoutFont} >Login</Text>
        <Text style={styles.textWithFont}>Login</Text>

        <Input
          placeholder="Email"
          value={inputs.email}
          onChangeText={(text) => handleChange("email", text)}
        />
        <Input
          placeholder="Password"
          value={inputs.password}
          onChangeText={(e) => handleChange("password", e)}
          secureTextEntry={true}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll:{
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center"
  },
  textWithoutFont:{
    fontSize: 20
  },
  textWithFont:{
    fontFamily: 'Raleway-Light',
    fontSize: 20
  }
});
