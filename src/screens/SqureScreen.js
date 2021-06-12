import React, {useState  } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";


const SqureScreen=()=>{
    const INCREMENT=15;
    const [red, setRed]=useState(0);
    const [green, setGreen]=useState(0);
    const [blue, setBlue]=useState(0);

    const setColor=(color, change)=>{
        switch(color){
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
                default:
                    return;
        }
    }
    return(
        <View>
            <ColorCounter
            onIncreace={()=> setColor('red',INCREMENT)} 
            onDecreace={()=> setColor('red', -1 * INCREMENT)}
            color="red"/>
            <ColorCounter
         onIncreace={()=> setColor('green',INCREMENT)} 
         onDecreace={()=> setColor('green', -1*INCREMENT)}
            color="blue" />
            <ColorCounter 
            onIncreace={()=> setColor('blue',INCREMENT)} 
            onDecreace={()=> setColor('blue', -1 *INCREMENT)}
            color="green"/>
            <View  style={{
                    height:150,
                    width:150,
                    backgroundColor:`rgb(${red},${green},${blue})`
                }}>
               
            </View>
        </View>
    );
};
const styles = StyleSheet.create({});
export default SqureScreen;