import React from "react";
import { Text, View, StyleSheet, Dimensions, TextInput } from "react-native";

export default function Display(props: any) {
  return (
    <>
      <View style={styles.containerDisplay}>
        <TextInput style={styles.txtDisplay} value={props.value} onChangeText={props.onChangeText}></TextInput>
        <Text style={styles.txtDisplay}>{props.res}</Text>
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
