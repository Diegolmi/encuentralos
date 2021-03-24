import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./Home";
import Galeria from "./Galeria";
import Portada from "./Portada";
import Busqueda from "./Busqueda";

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="Portada"
        component={Portada}
        options={{
          tabBarLabel: 'Portada',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="parking" color={"white"} size={26} />
            
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={"white"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Galeria"
        component={Galeria}
        options={{
          tabBarLabel: 'Galeria',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="image-multiple" color={"white"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Busqueda"
        component={Busqueda}
        options={{
          tabBarLabel: 'Busqueda',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dog-side" color={"white"} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
