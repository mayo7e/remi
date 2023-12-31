import {SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import Features from '../components/Features';
// import { ScrollView } from 'react-native-gesture-handler';

import {  dummyMessages } from '../constants';


const PlaceholderImage = require('../../assets/images/bot.png');

const [messages, setMessages] = useState(dummyMessages)
const [recording, setRecording] = useState(true)
const [isLoading, setIsLoading] = useState(false)

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
                `  <ScrollView  
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollView} >
                            {messages.map((message, index)=>{
                            if(message.role === "assistant"){
                                    if(message.content.includes("https")){
                                        return(
                                            <View 
                                            style={styles.imageChatContainer}
                                            key={index} >
                                                <Image 
                                                source= {{uri: message.content}} 
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

                    <View  style={styles.buttonContainer} >  
                                    {  
                                    isLoading? (
                                        
                                       <TouchableWithoutFeedback>
                                                <Image 
                                                source={require('../../assets/images/loading.gif')} 
                                                style={styles.imageStyle}
                                                />
                                    </TouchableWithoutFeedback>
                                        
                                        ):
                                        recording?(
                                                <TouchableWithoutFeedback>
                                                    <Image 
                                                    source={require('../../assets/images/voiceLoading.gif')} 
                                                    style={styles.imageStyle}
                                                    />
                                                </TouchableWithoutFeedback>
                                            
                                            ):(
                                                
                                                <TouchableWithoutFeedback>
                                                    <Image 
                                                    source={require('../../assets/images/recordingIcon.png')} 
                                                    style={styles.imageStyle}
                                                    />
                                             </TouchableWithoutFeedback>
                                        
                                        )
                                    }
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
        marginBottom: "16px",
      },
      
      chatContainer: {
         flex: 1,
          width: "85%",
        //   height: '60%',
         
        },
  
      chatBox: {
         flex: 1,
          width: "100%",
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
          borderTopLeftRadius: 0,
          
          
        },
      userContainer: {
          backgroundColor: "#90EE90",
          alignSelf: "flex-end",
          padding: "8px",
          borderRadius: "8px",
          marginBottom: "16px",
          width: "60%",
          borderTopRightRadius: 0,
        },
        imageChatContainer: {
            width: "200px",
            height: "200px",
            padding: "4px",
            backgroundColor: "#A0FFA0",
            borderRadius: "8px",
        },
        scrollView: {
            height: "70%",
        },

        buttonContainer: {
            alignSelf: "center",
            width: "100px",
            height: "100px",
           
           
        },
        
  
})