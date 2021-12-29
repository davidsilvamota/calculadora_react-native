import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function Display(props: any) {
  return (
    <>
      <View style={styles.containerDisplay}>
       <Text style={styles.txtDisplay}>{props.value}</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  containerDisplay: {
    flex:1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal:10
  },
  txtDisplay: {
    fontSize: 40,
    color: "white",
  },
});
