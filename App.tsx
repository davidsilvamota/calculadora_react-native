import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Botao from "./src/components/Botao";
import Display from "./src/components/Display";

export default function App() {
  const [num, setNum] = useState<any>(0);
  const [oldNum, setOldNum] = useState<any>(0);
  const [operador, setOperador] = useState<any>();

  const addDigito = (n: number) => {
    num == 0 ? setNum(n) : setNum(num + n);
  };

  const limpar = () => {
    setNum(0);
  };

  const handleOperation = (e: number) => {
    setOldNum(num);
    setOperador(e);
    setNum(0);
  };
  const calculate = () => {
    if (operador === "/") {
      setNum(oldNum / num);
    }
    if (operador === "x") {
      setNum(parseInt(oldNum) * parseInt(num));
    }
    if (operador === "+") {
      setNum(parseInt(oldNum) + parseInt(num));
    }
    if (operador === "-") {
      setNum(parseInt(oldNum) - parseInt(num));
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Display value={num}></Display>
        <View style={styles.calculadora}>
          <Botao label={"AC"} triple onPress={limpar}></Botao>
          <Botao label={"/"} operation onPress={handleOperation}></Botao>
          <Botao label={"7"} onPress={addDigito}></Botao>
          <Botao label={"8"} onPress={addDigito}></Botao>
          <Botao label={"9"} onPress={addDigito}></Botao>
          <Botao label={"x"} operation onPress={handleOperation}></Botao>
          <Botao label={"4"} onPress={addDigito}></Botao>
          <Botao label={"5"} onPress={addDigito}></Botao>
          <Botao label={"6"} onPress={addDigito}></Botao>
          <Botao label={"+"} operation onPress={handleOperation}></Botao>
          <Botao label={"1"} onPress={addDigito}></Botao>
          <Botao label={"2"} onPress={addDigito}></Botao>
          <Botao label={"3"} onPress={addDigito}></Botao>
          <Botao label={"-"} operation onPress={handleOperation}></Botao>
          <Botao label={"0"} double onPress={addDigito}></Botao>
          <Botao label={"."} onPress={addDigito}></Botao>
          <Botao label={"="} operation onPress={calculate}></Botao>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calculadora: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
