import {SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import Features from '../components/Features';
// import { ScrollView } from 'react-native-gesture-handler';

import {  dummyMessages } from '../constants';

const PlaceholderImage = require('../../assets/images/bot.png');

const [messages, setMessages] = useState(dummyMessages)

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
        <View style={styles.imageContainer}>
            <Image  style={styles.imageStyle} source={PlaceholderImage} />
        </View>
        {messages.length > 0 ? (
            <View style={styles.chatContainer} >
                <Text style={styles.assistantHeader} >Assistant</Text>
                <View style={styles.chatBox} >

                <ScrollView>
                        {messages.map((message, index)=>{
                           if(message.role === "assistant"){
                                if(message.content.includes("https")){
                                    return(
                                        <View 
                                        style={styles.imageContainer}
                                        key={index} >
                                            <Image 
                                               source= {{url: message.content}} 
                                               style={styles.imageStyle}
                                                resizeMode="contain"
                                                />
                                        </View>
                                        )
                                }else{
                                    return(
                                        <View 
                                        style={styles.assistantContainer}
                                        key={index}>
                                            < Text>{message.content}</Text>
                                        </View>
                                    )   
                                }
                           }
                            return(
                                <View 
                                style={styles.userContainer}
                                key={index}>
                                    < Text>{message.content}</Text>
                                </View>
                            )
                        })}
                </ScrollView>
                </View>
            </View>
        ): <Features />}
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    
        // justifyContent: 'flex-end', 
        alignItems: 'center', 
        backgroundColor: 'white',
        gap: '16px'
      },
    imageContainer: {
        width: 140,
        height: 140, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingTop: '16px'
        
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      },

      assistantHeader: {
       fontWeight: 700,
        fontSize: 24,
      },
      
      chatContainer: {
         flex: 1,
          width: "280px",
          height: '80%',
         
        },
  
      chatBox: {
         flex: 1,
          width: "100%",
         height: "50%",
         padding: "16px",
          borderRadius: 10,
          backgroundColor: "#CCCCCC"
        },



      assistantContainer: {
        flex: 1,
          backgroundColor: "#ffffff",
          padding: "8px",
          borderRadius: "8px",
          marginBottom: "16px",
          width: "60%",
          
        },
      userContainer: {
          backgroundColor: "#90EE90",
          alignSelf: "flex-end",
          padding: "8px",
          borderRadius: "8px",
          marginBottom: "16px",
          width: "60%",
        },
        imageContainer: {
            width: "200px",
            height: "200px",
        },

        
  
})