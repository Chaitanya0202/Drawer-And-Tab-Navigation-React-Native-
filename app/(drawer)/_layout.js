import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router, usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CustomDrawerContent = (props) => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfoWrapper}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          width={80}
          height={80}
          style={styles.userImg}
        />
        <View style={styles.userDetailsWrapper}>
          <Text style={styles.userName}>John Doe</Text>
          {/* <Text style={styles.userEmail}>john@email.com</Text> */}
        </View>
      </View>
      <DrawerItem
        icon={({ color, size }) => (
          <Feather
            name="home"
            size={size}
            color={pathname == "/feed" ? "#fff" : "#000"}
          />
        )}
        label={"Home"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/feed" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname == "/feed" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/(drawer)/(tabs)/feed");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign
            name="user"
            size={size}
            color={pathname == "/profile" ? "#fff" : "#000"}
          />
        )}
        label={"Profile"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/profile" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname == "/profile" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/(drawer)/(tabs)/profile");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign
            name="heart"
            size={size}
            color={pathname == "/likes" ? "#fff" : "#000"}
          />
        )}
        label={"Likes"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/likes" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname == "/likes" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/(drawer)/(tabs)/likes");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign
            name="wechat"
            size={size}
            color={pathname == "/chat" ? "#fff" : "#000"}
          />
        )}
        label={"Chat"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/chat" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname == "/chat" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/(drawer)/(tabs)/chat");
        }}
      />
      


      <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons
            name="favorite-outline"
            size={size}
            color={pathname == "/favourites" ? "#fff" : "#000"}
          />
        )}
        label={"Favourites"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/favourites" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname == "/favourites" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/favourites");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="settings-outline"
            size={size}
            color={pathname == "/settings" ? "#fff" : "#000"}
          />
        )}
        label={"Settings"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/settings" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname == "/settings" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/settings");
        }}
      />
    </DrawerContentScrollView>
  );
};

export default function Layout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{headerShown: false}}>
      <Drawer.Screen name="favourites" options={{headerShown: true}} />
      <Drawer.Screen name="settings" options={{headerShown: true}} />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
  userInfoWrapper: {
    // flexDirection: "row",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  userImg: {
    borderRadius: 40,
  },
  userDetailsWrapper: {
    marginTop: 25,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize:16,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  }
});
