import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  FlatList,
  TouchableHighlight,
  StyleSheet,
  onPress,
} from "react-native";

import CompanyHash from './CompanyHash';

export default function HomeScreen({ navigation }) {
  const [teams, setTeams] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logowellbeing.png")} />
      </View>
      <Text style={styles.title}>Etusivu</Text>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate("Kirjaa")}
          underlayColor="#ff00ff"
        >
          <Text style={styles.buttonText}>Kirjaa</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate("Lisää tiimi")}
          underlayColor="#ff00ff"
        >
          <Text style={styles.buttonText}>Lisää</Text>
        </TouchableHighlight>

      </View>
      <CompanyHash></CompanyHash>
      <FlatList
        data={teams}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item.team_name}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#e2e8f0",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: 100,
  },
  buttonText: {
    fontSize: 16,
  },
  listItem: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});
