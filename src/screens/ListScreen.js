import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";
import { color } from "react-native-reanimated";

const ListScreen = () => {
    const Friends=[
        {name:'pawan',age:"25"},
        {name:'rakesh',age:"75"},
        {name:'pumpy',age:"2555"},
        {name:'sushant',age:"45"},
        {name:'mahesh',age:"85"}
    ];
  return(<View>
      <Text style={styles.heading}>My friends are:-</Text>
        <FlatList
        keyExtractor={fri=>fri.name}
        showsHorizontalScrollIndicator={false}
        data={Friends}
        renderItem={({item})=>{
          return <Text style={styles.subheading}>{item.name}-age{item.age}</Text>
        }}
      />
    
    </View>
    );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 45
  }
});

export default ListScreen;
