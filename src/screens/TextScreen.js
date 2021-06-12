import React, {useState}from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen=()=>{
    const [name, setName]= useState('');
    const [pass, setPass]= useState('');
    return(
        <View>
        <Text>Enter Name:</Text>
        <TextInput 
         style={styles.input}
         autoCapitalize="none"
         autoCorrect={false}
         value={name}
         onChangeText={newValue => setName(newValue)}
         />
         <Text style={styles.displayText}>My Name is : {name}</Text>

         <Text>Enter Password:</Text>
        <TextInput 
         style={styles.input}
         autoCapitalize="none"
         autoCorrect={false}
         value={pass}
         onChangeText={newPass => setPass(newPass)}
         />
         {pass.length >5 || pass.length==5 ? <Text style={styles.displayPass}>Password can"t be so longer</Text>: null}
         
        </View>
    );
};
const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'green',
        borderWidth:1
    },
    displayText:{
        borderColor:'green',
        color:'green',
        fontWeight:'800',
        fontSize: 39
    },
    displayPass:{
        borderColor:'red',
        color:'red',
        fontWeight:'800',
        fontSize: 39
    }
})
export default TextScreen;