// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  Button,
  Avatar,
  Text,
  Card,
  IconButton,
  Paragraph,
  Title,
  Colors,
  TextInput,
} from "react-native-paper";
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from "react-native-gesture-handler";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2ba",
    title: "First Item",
    image: require("../assets/perro.png"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb8ba",
    title: "Perro2",
    image: require("../assets/perro2.png"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53ab28ba",
    title: "Perro3",
    image: require("../assets/perro3.png"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad3abb28ba",
    title: "First Item",
    image: require("../assets/perro4.png"),
  },
  {
    id: "bd7acbea-c1b1-46c2-ae5-3ad53abb28ba",
    title: "First Item",
    image: require("../assets/perro.png"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53bb28ba",
    title: "First Item",
    image: require("../assets/perro5.png"),
  },
];

//const img = source(require('../../assets/perro2.png'))
const Item = ({ item: { image, title, id } }) => (
  <TouchableOpacity>
    <Avatar.Image size={70} source={image} style={styles.story} />
    <Text style={{ alignSelf: "center" }}>{title}</Text>
  </TouchableOpacity>
);

const Galeria = ({}) => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };
  const [text, setText] = useState("");
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={DATA}
          // @ts-ignore
          renderItem={Item}
          horizontal
        />
      </SafeAreaView>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => (
              <Avatar.Image
                size={50}
                source={require("../assets/perro4.png")}
                style={styles.avatarCard}
              />
            )}
            right={props => (
              <IconButton
                color={Colors.red500}
                icon="equal"
                onPress={() => {
                  console.log("pressed");
                }}
              />
            )}
          />
          <Card.Cover source={require("../assets/perro2.png")} />
          <Card.Actions>
            <IconButton icon="heart" onPress={onPress} color={Colors.red500} />
            <Text>{count}</Text>

            <IconButton icon="comment" color={Colors.blue400} />
            <Text style={{}}>Comentarios</Text>
          </Card.Actions>
          <Card.Content>
            <Title>Card title</Title>
            <TextInput
              label="comentario"
              value={text}
              onChangeText={text => setText(text)}
            />
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => (
              <Avatar.Image
                size={50}
                source={require("../assets/perro4.png")}
                style={styles.avatarCard}
              />
            )}
            right={props => (
              <IconButton
                color={Colors.red500}
                icon="equal"
                onPress={() => {
                  console.log("pressed");
                }}
              />
            )}
          />
          <Card.Cover source={require("../assets/perro3.png")} />
          <Card.Actions>
            <IconButton icon="heart" onPress={onPress} color={Colors.red500} />
            <Text>{count}</Text>

            <IconButton icon="comment" color={Colors.blue400} />
            <Text style={{}}>Comentarios</Text>
          </Card.Actions>
          <Card.Content>
            <Title>Card title</Title>
            <TextInput
              label="comentario"
              value={text}
              onChangeText={text => setText(text)}
            />
          </Card.Content>
        </Card>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 7,
    marginTop: 10,
  },
  story: {
    margin: 5,
  },
  // avatarCard: {
  //   marginLeft: -10,
  // }
});
export default Galeria;
