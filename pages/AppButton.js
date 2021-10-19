import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function AppButton({name,color,onPress}) {
  onPress = {onPress};
    return (
        <TouchableOpacity
        style={[styles.button1,{backgroundColor:color}]}
        >
            <Text style={styles.text}>
              {name}
            </Text>
  
        </TouchableOpacity>
 
    )
}

const styles = StyleSheet.create({
    button1:{
        backgroundColor:"#fc4c65",
        marginBottom:20,
        padding:12,
        borderRadius:20,
        width:"95%",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:'center',
        width:150,
    
      },
      text:{
        fontSize:20,
        fontWeight:'600',
        color:'white',
      },
    
})
