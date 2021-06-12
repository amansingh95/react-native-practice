import React, {useState} from "react";
import { Text, StyleSheet,View, Button, TouchableOpacity , Image } from "react-native";

const ImageDetail = props=> {
    const[likes, setLikes]=useState(0);
    const[dislikes, setDisLikes]=useState(0);
    return(
      <View>
          <Image source={props.imageSourse }/>
        <Text style={styles.text}>{props.title}</Text>
        <TouchableOpacity onPress={()=>setLikes(likes+1)} >
       <Text>Likes {likes}</Text>
      </TouchableOpacity><TouchableOpacity onPress={()=>setDisLikes(dislikes+1)} >
       <Text>Dislikes {dislikes}</Text>
      </TouchableOpacity>
      
     </View>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 24
    }
  });
  
  export default ImageDetail;