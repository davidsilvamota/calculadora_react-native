import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function Botao(props: any) {
  const styles = StyleSheet.create({
    containerBotao: {
      fontSize: 35,
      height: Dimensions.get("window").width / 4,
      width: Dimensions.get("window").width / 4,
      padding: 20,
      backgroundColor: "#f0f0f0",
      textAlign: "center",
      borderWidth: 1,
    },
    operationButton: {
      backgroundColor: "#fa8231",
      color: "white",
    },
    buttonDouble: {
      width: (Dimensions.get("window").width / 4) * 2,
    },
    buttonTriple: {
      width: (Dimensions.get("window").width / 4) * 3,
    },
  });

  return (
    <>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.containerBotao}>{props.label}</Text>
      </TouchableOpacity>
    </>
  );
}
