import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  var name='Aman'
  return(
  <View>
    <Text style={styles.heading}>Geating started with reactNative</Text>
    <Text style={styles.subheading}>{name}</Text> 
  </View>
    );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 45
  },
  subheading:{
    fontSize:20
  }
});

export default ComponentsScreen;
