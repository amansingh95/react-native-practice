import React from "react";
import { Text, StyleSheet,View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button onPress={()=>navigation.navigate('Copmonent')} title="Go to Component" />
      <TouchableOpacity onPress={()=>navigation.navigate('ImageScreen')} >
       <Text>Image Screen</Text>
      </TouchableOpacity>
      
      <Button onPress={()=>navigation.navigate('CounterScreen')} title="Counter Screen" />
      <Button onPress={()=>navigation.navigate('ColorScreen')} title="Color Screen" />
      <Button onPress={()=>navigation.navigate('SqureScreen')} title="Squre Screen" />
      <Button onPress={()=>navigation.navigate('TextScreen')} title="Text Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
