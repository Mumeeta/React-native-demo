import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme, Avatar, Title, Caption, Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
// import { AuthContext } from "../components/context";

export function DrawerContent(props) {
  const paperTheme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "../assets/logowellbeing.png",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Team</Title>
                <Caption style={styles.caption}>Page</Caption>
              </View>
            </View>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Ionicons name="home" size={24} color="black" />
                )}
                label="Etusivu"
                onPress={() => {
                  props.navigation.navigate("Etusivu");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Ionicons name="push" size={24} color="black" />
                )}
                label="Notification"
                onPress={() => {
                  props.navigation.navigate("Notification");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Ionicons name="briefcase-sharp" size={24} color="black" />
                )}
                label="CompanyHash"
                onPress={() => {
                  props.navigation.navigate("CompanyHash");
                }}
              />
              
              {/* <DrawerItem
                icon={({ color, size }) => (
                  <Ionicons name="logo-ionic" size={24} color="black" />
                )}
                label="Faq"
                onPress={() => {
                  props.navigation.navigate("Faq");
                }}
              /> */}
              <DrawerItem
                icon={({ color, size }) => (
                  <Ionicons name="settings-sharp" size={24} color="black" />
                )}
                label="Kirjaa"
                onPress={() => {
                  console.log("Navigating to KirjaaScreen"); //testing
                  props.navigation.navigate("Kirjaa");
                }}
              />
              <DrawerItem
                  icon={({ color, size }) => (
                    <Ionicons name="add-circle" size={24} color="black" />
                  )}
                  label="Lisäätiimi"
                  onPress={() => {
                    props.navigation.navigate("Lisäätiimi");
                  }}
                />

            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
});
