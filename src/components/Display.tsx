import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function Display(props: any) {
  return (
    <>
      <View style={styles.containerDisplay}>
       <TextInput onChangeText={props.onChangeTexte} value={props.value} ></TextInput>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  containerDisplay: {
    backgroundColor: "gray",
    justifyContent: "center",
    height:"30%",
    alignItems: "flex-end",
    padding: 10,
  },
  txtDisplay: {
    fontSize: 40,
    color: "white",
  },
});
