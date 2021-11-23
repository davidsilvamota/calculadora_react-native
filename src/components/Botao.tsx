import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

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

export default function Botao(props: any) {
  const buttonStyle = [styles.containerBotao]
  if(props.double){
    buttonStyle.push(styles.buttonDouble)
  }
  if(props.triple){
    buttonStyle.push(styles.buttonTriple)
  }
  if(props.operation){
    buttonStyle.push(styles.operationButton)
  }
  return (
    <>
      <TouchableOpacity onPress={()=>props.onPress(props.label)}>
        <Text style={buttonStyle}>{props.label}</Text>
      </TouchableOpacity>
    </>
  );
}
