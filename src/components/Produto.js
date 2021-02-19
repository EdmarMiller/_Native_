import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image, 
} from 'react-native';

const Produto = ({
  categoria, 
  nome, 
  descricao, 
  preco, 
  preco_final, 
  imagem}) => {
  return (
     
      <View style={styles.container}>
          <Text>Categoria: {categoria}</Text>
          <Image source={require(`../../assets/img-produtos/${imagem}`)} style= {styles.imagem} />
          <Text>Nome: {nome}</Text>
          <Text>Descrição: {descricao}</Text>
          <Text>Preço: {preco}</Text>
          <Text>Promoção: {preco_final}</Text>
      </View>
  )
}

export default Produto;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 10, 
      margin: 10,
      borderRadius: 10, 
      backgroundColor: "#F5DAD6",
      alignItems: "center",
      justifyContent: "center",
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    
  }
})



