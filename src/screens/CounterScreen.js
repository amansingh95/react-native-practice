import React, {useState} from "react";
import {Text, View, StyleSheet, Button} from "react-native";

const CounterScreen=()=>{
    const[counter, setCounter]=useState(0);
return(
    <View>
    <Button onPress={()=>setCounter(counter+1)} title="Incress" />
    <Button onPress={()=>setCounter(counter-1)} title="Decress" />
<Text>{counter}</Text>
    </View>
);
const styles = StyleSheet.create({
    
});
}
export default CounterScreen;