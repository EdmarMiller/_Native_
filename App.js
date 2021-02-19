import React from 'react';
import Routes from './src/routes/index'
import { 
  StyleSheet,

} from "react-native";


export default function App() {
  return (
     <Routes />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
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
