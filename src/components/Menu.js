import React from "react";
import { 
  View,
  Text,
  TouchableOpacity 
} from "react-native";

const Menu = (props) => {
  return (
    <View style={{alignItems: 'flex-end', padding: 20, backgroundColor: "#F08080" }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.openDrawer();
          setTimeout(() => {
            props.navigation.closeDrawer();
          }, 3000);
        }}
      >
        
        <Text style={{ fontSize: 40 }}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
