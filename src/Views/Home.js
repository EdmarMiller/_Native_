import React from "react";
import { View } from "react-native";

import Menu from "../components/Menu";
import Home from "../components/Home";

const pgHome = (props) => {
  return (
    <View style={{ flex: 1 }}>
       <Menu navigation={props.navigation} /> 
      <Home text="Home" />
    </View>
  );
};

export default pgHome;
