import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Botao from "./src/components/Botao";
import Display from "./src/components/Display";

export default function App() {
  let inicio = {
    valorTela : "",
    valorResultado : 0,
    operado :false,
    
  }
  const [displayValue, setDisplayValue] = useState(inicio.valorTela);
  const [resultado,setResultado]= useState(inicio.valorResultado)
  
  const changeValor = (e: any)=>{
    setDisplayValue(e.target.value)
  }

  const addDigito = (n : string) => {
    inicio.valorTela = inicio.valorTela+n
    setDisplayValue(inicio.valorTela);
  };
  const deleteDigito = () => {
    setDisplayValue("0");
  };

  return (
    <>
      <View style={styles.container}>
        <Display value={displayValue} onChangeText={changeValor} res={resultado}></Display>
        <View style={styles.calculadora}>
          <Botao label={"AC"} triple onPress={deleteDigito}></Botao>
          <Botao label={"÷"} operation></Botao>
          <Botao label={"7"} onPress={addDigito}></Botao>
          <Botao label={"8"} onPress={addDigito}></Botao>
          <Botao label={"9"} onPress={addDigito}></Botao>
          <Botao label={"×"} operation></Botao>
          <Botao label={"4"} onPress={addDigito}></Botao>
          <Botao label={"5"} onPress={addDigito}></Botao>
          <Botao label={"6"} onPress={addDigito}></Botao>
          <Botao label={"+"} operation></Botao>
          <Botao label={"1"} onPress={addDigito}></Botao>
          <Botao label={"2"} onPress={addDigito}></Botao>
          <Botao label={"3"} onPress={addDigito}></Botao>
          <Botao label={"-"} operation></Botao>
          <Botao label={"0"} double onPress={addDigito}></Botao>
          <Botao label={"."}onPress={addDigito}></Botao>
          <Botao label={"="} operation></Botao>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  calculadora: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
