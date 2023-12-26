import React from 'react'

import {TouchableOpacity, StyleSheet, Text, View } from 'react-native';





const Button = () => {
  return (
   <TouchableOpacity style={styles.container}>
    <Text style={styles.buttonText} >Proceed</Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(5 150 105)",
    width:"80%",
    height:"40px",
    borderRadius: 4, 
   
  },
  buttonText: {
    marginVertical:"auto",
    marginHorizontal:"auto",
    color:"white",
    fontSize: "18px",
  
   
  },
});

export default Button
