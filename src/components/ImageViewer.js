
import React from 'react'

import { StyleSheet, Text, Image, View } from 'react-native';





const ImageViewer = ({image}) => {

   
  return (
    <View style={styles.imageContainer} >
        <Image style={styles.image} source= {image} />
    </View>
  )
}

const styles = StyleSheet.create({
  
  imageContainer: {
    width: "240px",
    // borderRadius: 10, 
    // borderWidth: 2, 
    // borderColor: 'tomato',
    
},
image: {
    width: "100%",
    textAlign: 'center',
   
    height: '240px',
  },
});

export default ImageViewer

