import React from "react";
import { View, Text, Button, StyleSheet, FlatList, Image } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios

const Posts = (props) => {
  //Init State

  // Create LifeCycle
  //Function Exception

  // Create Function to fetch

  //   Create Component List
  return (
    <View style={style.container}>
      <View>
        <Image
          source={require('../../assets/imgindex.png')}
          style={{ width: 400, height: 400 }}
          />
        <Image
          source={require('../../assets/waystodo.png')}
          style={{ width: 280, height: 50, marginLeft: 50}}
          />


        <Text>Write your activity and finish your activity. Fast, Simple and Easy to Use</Text>

        <Button
          title="Login"
          onPress={() => props.navigation.navigate("Login")}
        />
        <Button
          title="Register"
          onPress={() => props.navigation.navigate("Register")}
        />
        {/* Render Component List */}
      </View>
    </View>
  );
};

export default Posts;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
