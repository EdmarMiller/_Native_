import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
} from 'react-native'


const Botao = ({text}) => {
  return (
    <View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.p}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Botao

const styles = StyleSheet.create({
  p: {
    color: "#fff",
    fontSize: 30,
  },
  button: {
    alignItems: 'center', 
    backgroundColor: "#F08080", 
    marginTop:25,   
    paddingHorizontal: 15,
    paddingVertical: 15, 
    width: '95vw',
    borderRadius: 50,  
  }
})