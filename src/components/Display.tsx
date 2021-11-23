import React from "react";
import { Text, View, StyleSheet } from "react-native";

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
    height: 100,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10,
  },
  txtDisplay: {
    fontSize: 40,
    color: "white",
  },
});
