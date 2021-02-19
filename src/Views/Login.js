import React from "react";
import { View } from "react-native";

import Menu from '../components/Menu'
import Form from "../components/Form";

const Login = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Menu navigation={props.navigation}/> 
      
      <Form/>
    </View>
  );
};

export default Login;
