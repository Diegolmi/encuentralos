import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import Portada from './src/screen/Portada';
import Login from './src/screen/Login';
import Tabs from './src/screen/Tabs';


const App = () => {

  const Stack = createStackNavigator();


  return (
    <>
  <NavigationContainer>
   <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Portada" component={Portada} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Tabs} />
        
      </Stack.Navigator>
    </NavigationContainer> 
    
    </>
  );
}

export default App;
