import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableRipple } from 'react-native-paper';



const onPressTitle = () => {
  console.log("title pressed");
};

const TextInANest = ({ navigation }) => {
  const titleText = useState("Ingresar");
  const bodyText = useState("Encuentra tu mascota");

  return (

    <TouchableRipple
    onPress={() => navigation.navigate('Portada')}
    rippleColor="rgba(0, 0, 0, .32)"
  >
    <Text >
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({

  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default TextInANest;
