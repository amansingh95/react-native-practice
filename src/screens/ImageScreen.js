import React from "react";
import { Text, StyleSheet,View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetail";
const ImageScreen = ({navigation}) => {
    return(
      <View>
        <ImageDetail title="sanjay dutth" imageSourse= { require('../../assets/sanjay.jpeg')} score="1"/>
        <ImageDetail  title="salman" imageSourse= { require('../../assets/sanjay.jpeg')}  score="10"/>
        <ImageDetail   title="laden" imageSourse= { require('../../assets/sanjay.jpeg')}score="111"/>
        <ImageDetail   title="Jon cena" imageSourse= { require('../../assets/sanjay.jpeg')} score="17"/>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    
  });
  
  export default ImageScreen;