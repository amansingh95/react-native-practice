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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
