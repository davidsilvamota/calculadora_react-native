import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

export default function Display(props: any) {
  return (
    <>
      <View style={styles.containerDisplay}>
        <Text style={styles.txtDisplay}>{props.txtDisplay}</Text>
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
