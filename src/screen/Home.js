import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  Pressable,
} from "react-native";
import {
  BottomNavigation,
  Text,
  Avatar,
  Searchbar,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import Portada from "./Portada";

const DATA = [
  {
    id: "Diego",
    // @ts-ignore
    image: require("../assets/perro.png"),
    title: "Busqueda",

  },
  {
    id: "12",
    // @ts-ignore
    image: require("../assets/perro4.png"),
    title: "Alimentos",
  },
  {
    id: "5454",
    // @ts-ignore
    image: require("../assets/perro3.png"),
    title: "Veterinarias",
  },
  {
    id: "8887",
    // @ts-ignore
    image: require("../assets/perro.png"),
    title: "Medicamentos",
  },
  {
    id: "98986",
    // @ts-ignore
    image: require("../assets/perro2.png"),
    title: "Razas",
    type: "Busqueda"
  },
];


const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const Item = ({ item: { image, title, type } }) => (
    <TouchableOpacity onPress= {() => navigation.navigate(type)}>
      <Image style={styles.cardCategori} source={image} />
      <Text style={{ color: "white", alignSelf: "center" }}>{title}</Text>
      
      
    </TouchableOpacity>
  );

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <>
      <ScrollView>
        <View style={{ backgroundColor: "black" }}>
          <Image
            style={{
              height: 400,
              width: 400,
              borderBottomRightRadius: 150,
              borderBottomLeftRadius: 150,
              // @ts-ignore
            }}
            // @ts-ignore
            source={require("../assets/fondo2.png")}
          />
          <Title style={styles.title}>Encuentralos</Title>
          {/* <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    /> */}
          <Text style={styles.categorias}>Categorias</Text>

          <SafeAreaView>
           
            <FlatList
              data={DATA}
              // @ts-ignore
              renderItem={Item}
              horizontal
            />
            
          </SafeAreaView>
          <Title style={{color: "white"}}>Que hace esta App?</Title>
          <Paragraph style={{color: "white"}}>Todos los dias se pierden cientos de mascotas. Muchas veces se hace muy dificil encontrarlas.
          Por eso desarrollamos esta app que te va a permitir encontrar mas rapidamente a tu mascota con la colaboracion
          de tod@s. 
          Como funciona?
          Si tu mascota se pierde, podes mediante un simple boton enviar una alerta en la que va a ir la foto de tu mascota
          mas un audio con tu vos llamandola. Esta alerta dependiendo el tiempo que ya se encuentre perdida tu mascota, va a sonar en todos los telefonos que tengan la app ENCUENTRALOS instalada,
          en 1 o 5 km a la redonda de tu hogar. De esa manera todos podran  estar atentos por si la ven. </Paragraph>
          <Paragraph style={{color: "white"}}>Tambien podras encontrar veterinarias de turno, consejos para alimentos e incluso podras poner fotos de tu mascota
            en un Instagram mascotero
          </Paragraph>
          <Paragraph style={{color: "white"}}> Te invitamos a que la disfrutes, Gracias por acompañarnos</Paragraph>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    color: "red",
    textAlign: "center",
    marginTop: 25,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },
  categorias: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 60,
    color: "#fff",
  },
  cardCategori: {
    marginTop: 15,
    height: 100,
    width: 100,
    margin: 10,
  },
});

export default Home;
