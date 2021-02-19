import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground 
} from "react-native";

import Input from "./Input";
import Botao from "./Botao";

import Doces from "../../assets/doces.jpg";

const Form = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={Doces}>
        <Text style={styles.h1}>Bem vindo a loja da tia!</Text>
      </ImageBackground>
  
      <View style={styles.containerInput}>
        <Input type="email-address" placeholder="Digite o seu email" />
        <Input secureTextEntry placeholder="Digite sua senha" />
        <Botao text="Entrar"/>
      </View>

      
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  containerInput: {
    flex: 5,
    alignItems: "center",
    width: '70%',
    
  },
  h1: {
    fontSize: 30,
    color: "#fff"
  }
});
