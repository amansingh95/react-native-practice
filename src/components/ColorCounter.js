import React, {useState  } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const ColorCounter=({color, onIncreace, onDecreace})=>{
    return(
        <View>
            <Text>{color}</Text>
            <Button onPress={()=>onIncreace()} title={`Increase ${color}`}/>
            <Button onPress={()=>onDecreace()} title={`Decrease ${color}`}/>
        </View>
    );
};
const styles = StyleSheet.create({});
export default ColorCounter;