import React from "react";
import { 
  View,
  Text, 
  StyleSheet,
  ImageBackground, 
} from "react-native";

import imgHome from "../../assets/home.jpg";

const Home = () => {
  return (
    <View style={styles.container}>
    <ImageBackground style={styles.background} source={imgHome}>
      <Text style={styles.h1}>Bem vindo a loja da tia!</Text>
    </ImageBackground>
      
  </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   
  },
 
  h1: {
    fontSize: 50,
    color: "#fff",
  }
})
