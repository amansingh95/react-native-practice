import React, {useReducer } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";


const SqureScreen=()=>{
    const INCREMENT=15;

    const reducer=(state, action)=>{
        
        switch(action.type){
            case 'change_red':
                return state.red + action.payload > 255 || state.red + action.payload < 0 ?
                 state :
                 {...state, red:state.red + action.payload};
            case 'change_green':
                return state.green + action.payload > 255 || state.green + action.payload < 0 ?
                state :
                {...state, green:state.green + action.payload};
            case 'change_blue':
                return state.blue + action.payload > 255 || state.blue + action.payload < 0 ?
                state :
                {...state, blue:state.blue + action.payload};
                default:
                 return state;
        }
    }
    const [state, dispatch]=useReducer(reducer, {red: 0, green:0,  blue:0});
    const {red,green, blue}=state;
    return(
        <View>
            <ColorCounter
            onIncreace={()=> dispatch({type:'change_red', payload:INCREMENT})} 
            onDecreace={()=>dispatch({type:'change_red', payload:-1*INCREMENT})}
            color="red"/>
            <ColorCounter
         onIncreace={()=> dispatch({type:'change_green', payload:INCREMENT})} 
         onDecreace={()=>dispatch({type:'change_green', payload:-1*INCREMENT})}
            color="green" />
            <ColorCounter 
            onIncreace={()=> dispatch({type:'change_blue', payload:INCREMENT})} 
            onDecreace={()=>dispatch({type:'change_blue', payload:-1*INCREMENT})}
            color="blue"/>
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