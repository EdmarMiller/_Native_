import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Login from '../Views/Login'
import Home from '../Views/Home'
import Produtos from '../Views/Produtos'

const routeTab = createBottomTabNavigator()

const Tab = () => {
  return (
    <routeTab.Navigator initialRouteName='Produtos' tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'blue',
      labelStyle: {fontSize: 25},
      
    }}>
      <routeTab.Screen name="Login" component={Login}/>
      <routeTab.Screen name="Home" component={Home}/>
      <routeTab.Screen name="Produtos" component={Produtos}/>
    </routeTab.Navigator>
  )
}

export default Tab