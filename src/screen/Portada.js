 import React from "react";
 import { ImageBackground, StyleSheet,  View, Text} from "react-native";
 //import { Button, Footer, FooterTab } from 'native-base';
 import { TouchableRipple, Button} from 'react-native-paper';



 const Portada = ({ navigation }) => (
  
   <>
   
   <View style={styles.container}>
  
     <ImageBackground source={require(
// @ts-ignore
     '../assets/portada2.png')} style={styles.image}>
       
      <Button style={styles.boton} mode="contained" onPress={() => navigation.navigate('Galeria')}>Entrar</Button>
     </ImageBackground>
    
   </View>
   
   
   </>
 );

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: "column"
   },
   image: {
     flex: 1,
     resizeMode: "cover",
     justifyContent: "center"
   },
   boton: {
     marginTop: 680,
   }
  
 });

 export default Portada;