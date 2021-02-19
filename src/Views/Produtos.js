import React from "react";
import { StatusBar } from "expo-status-bar";
import { 
  View, 
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground, 
  FlatList  
} from "react-native";

import Menu from "../components/Menu";
import Produto from "../components/Produto";

const dados = [
  {
  id: Math.random(), 
  categoria: "Bolo",
  nome: "Bolo Branco",
  descricao: "Delicioso bolo Branco",
  preco: 89.25,
  preco_final: 69.23,
  imagem: "b_branco.jpg"
  },
  {
  id: Math.random(), 
  categoria: "Bolo",
  nome: "Bolo Sem Açucar",
  descricao: "Bolo ZERO Açucar",
  preco: 120.25,
  preco_final: 89.23,
  imagem: "b_fruta.jpg"
  },
  {
  id: Math.random(), 
  categoria: "Bolo",
  nome: "Bolo Chocolate",
  descricao: "Delicioso bolo de Chocolate",
  preco: 89.25,
  preco_final: 69.23,
  imagem: "b_chocolate.jpg"
  },
  {
  id: Math.random(), 
  categoria: "Doce",
  nome: "Premium",
  descricao: "Doces especiais pra pessoas especiais!",
  preco: 85.25,
  preco_final: 67.23,
  imagem: "d_cachepo.jpg"
  },
  {
  id: Math.random(), 
  categoria: "Doce",
  nome: "Tradicionais",
  descricao: "Vai um brigadeiro?",
  preco: 82.21,
  preco_final: 51.15,
  imagem: "d_brigadeiro.jpg"
  },
  {
  id: Math.random(), 
  categoria: "Doce",
  nome: "Clássicos",
  descricao: "Aqueles doces atemporais",
  preco: 65.25,
  preco_final: 35.83,
  imagem: "d_casadinho.jpg"
  },
  {
  id: Math.random(), 
  categoria: "Doce",
  nome: "Padrinhos",
  descricao: "Convites lindos e saborosos.",
  preco: 75.25,
  preco_final: 57.23,
  imagem: "d_tablete.jpg"
  },
  {
  id: Math.random(), 
  categoria: "Doce",
  nome: "Convidados",
  descricao: "Lembraças Inesquecíveis",
  preco: 64.25,
  preco_final: 38.23,
  imagem: "d_bem_casado.jpg"
}
]

const Produtos = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Menu navigation={props.navigation} /> 
    <SafeAreaView style={styles.container}>
      
           <FlatList 
            data={dados}
             keyExtractor={(item) => `${item.id}`}
            renderItem={({item}) => (
               <Produto 
               categoria={item.categoria} 
               imagem={item.imagem} 
               nome={item.nome} 
               descricao={item.descricao} 
               preco={item.preco} 
               preco_final={item.preco_final} 
               
               />
             )}
          />
    
     <StatusBar style="auto " />
    </SafeAreaView>
    </View>
  );
};

export default Produtos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F7",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 500, 
  },
  h1: {
    fontSize: 20, 
    color: "#fff"
  },
  containerUsers: {
    flex: 7, 
  }
});