import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Botao from "./src/components/Botao";
import Display from "./src/components/Display";

export default function App() {

  const [numeros,setNumeros]=useState(0)

  const addDigito =()=>{
    setNumeros(7)
  }
  const clear = ()=>{
    setNumeros(0)
  }
  return (
    <>
      <View style={styles.container}>
        <Display txtDisplay={numeros}></Display>
        <View style={styles.calculadora}>
          <Botao label={"AC"}></Botao>
          <Botao label={"%"}></Botao>
          <Botao label={"÷"}></Botao>
          <Botao label={7}></Botao>
          <Botao label={8}></Botao>
          <Botao label={9}></Botao>
          <Botao label={"×"}></Botao>
          <Botao label={4}></Botao>
          <Botao label={5}></Botao>
          <Botao label={6}></Botao>  
          <Botao label={"+"}></Botao>
          <Botao label={1}></Botao>
          <Botao label={2}></Botao>
          <Botao label={3}></Botao>
          <Botao label={"-"}></Botao>
          <Botao label={0}></Botao>
          <Botao label={","}></Botao>
          <Botao backgroundColor="red" label={"="}></Botao>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
  },
  calculadora: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
