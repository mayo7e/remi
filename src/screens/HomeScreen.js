import {SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import Features from '../components/Features';
import Voice from '@react-native-voice/voice';
import Tts from 'react-native-tts';


import {  dummyMessages } from '../constants';
import { apiCall } from '../api/OpenAi';

import { useTranslation } from "react-i18next";

const PlaceholderImage = require('../../assets/images/bot.png');






const HomeScreen = () => {

const [t, i18n] = useTranslation()   

    const [recording, setRecording] = useState(false)
    const [results, setResults] = useState("")


    const textToSpeech = ()=>{
        Tts.speak('Hello, world!');
    }

    function SpeechStartHandler (e){
        console.log("Speech start handler")
}
        function SpeechEndHandler (e){
            console.log("Speech stop handler")
    }
            function SpeechResultsHandler (e){
                console.log("Voice prompt", e)
                setResults(e.value[0])
        }

const startRecording = async ()=>{
        setRecording(true)
        console.log("starting")
        if(Voice){
        try{
            await Voice.start("en-GB") 
        }catch(error){
            console.log("Error ", error)
        }
    } 
}

        const stopRecording = async ()=>{
            setRecording(false)
            console.log("stoping")
            if(Voice){
            try{
                await Voice.stop() 
                textToSpeech()
            }catch(error){
                console.log("Error ", error)
            }
        } 
        }
            console.log(results)

useEffect(()=>{
    Voice.onSpeechStart = SpeechStartHandler;
    Voice.onSpeechEnd = SpeechEndHandler;
    Voice.onSpeechResults = SpeechResultsHandler;

    // tts

    Tts.addEventListener('tts-start', (event) => console.log("start", event));
    Tts.addEventListener('tts-finish', (event) => console.log("finish", event));
    Tts.addEventListener('tts-cancel', (event) => console.log("cancel", event));

                        return ()=>{
                            Voice.destroy().then(Voice.removeAllListeners)
                        }
    }, [])



        return(

            <SafeAreaView style={styles.container} >

            <View>
               <Text>hi</Text>
                
                <Pressable onPress={startRecording} >
                 <View>
                    <Text>{t("Start Button")}</Text>
                 </View>
                </Pressable>
                <Pressable onPress={stopRecording} >
                 <View>
                    <Text> Stop Button now</Text>
                 </View>
                </Pressable>

                <Pressable  style={styles.btncontainer} >
                            <Image 
                            source={require('../../assets/images/recordingIcon.png')} 
                            style={styles.btnStyle}
                            />
                    </Pressable>

            </View>

        </SafeAreaView>
        )
//     const [messages, setMessages] = useState(dummyMessages)
//     const [recording, setRecording] = useState(false)
//     const [isLoading, setIsLoading] = useState(false)
//     const [stopRecording, setStopRecording] = useState(false)
    
//     function SpeechStartHandler (e){
//             console.log("Speech start handler")
//     }
//     function SpeechEndHandler (e){
//             console.log("Speech end handler")
//     }
//     function SpeechResultsHandler (e){
//             console.log("Voice prompt - ", e)
//     }
//     function SpeechErrorHandler (e){
//             console.log("Speech error handler - ", e)
//     }




//         const startRecording = async ()=>{
//             setRecording(true)
//             if(Voice){
//             try{
//                 await Voice.start("en-US") 
//             }catch(error){
//                 console.log("Error ", error)
//             }
//         }
// }

//             const stopRecordingVoice = async ()=>{
//                 try{
//                     await Voice.stop() 
//                     setRecording(false)
//                 }catch(error){
//                     console.log("Error ", error)
//                 }
//             }



//             function clearMessage (){
//                 setMessages([])
//                 console.log(messages)
//             }

//                 function stopSpeaking (){
//                     setRecording(false)
//                 }



//             useEffect(()=>{
//                 Voice.onSpeechStart = SpeechStartHandler;
//                 Voice.onSpeechEnd = SpeechEndHandler;
//                 Voice.onSpeechResults = SpeechResultsHandler;
//                 Voice.onSpeechError = SpeechErrorHandler

//                     return ()=>{
//                         Voice.destroy().then(Voice.removeAllListeners)
//                     }
//             }, [])
  
//         return (
//             <SafeAreaView style={styles.container} >

//                 <View style={styles.imageContainer}>
//                     <Image  style={styles.imageStyle} source={PlaceholderImage} />
//                 </View>

//                 <Text style={styles.assistantHeader} >{messages? "Assistant" : null }</Text>
                
//                 {messages.length > 0 ? (
//                     <View
//                      style={styles.chatContainer}
//                     >

//                         <ScrollView  
//                             showsVerticalScrollIndicator={false}
//                             style={styles.chatDisplay} 
                            
//                         >
//                                 {
//                                     messages.map((message, index)=>{
//                                     if(message.role === "assistant"){
//                                             if(message.content.includes("https")){
//                                                 return(
//                                                     <View 
//                                                         style={styles.imageChatContainer}
//                                                         key={index} >
//                                                             <Image 
//                                                             source= {{uri: message.content}} 
//                                                             style={styles.imageStyle}
//                                                                 resizeMode="contain"
//                                                                 />
//                                                     </View>
//                                                     )
//                                             }else{
//                                                 return(
//                                                     <View 
//                                                     style={styles.assistantContainer}
//                                                     key={index}>
//                                                         < Text>{message.content}</Text>
//                                                     </View>
//                                                 )   
//                                             }
//                                         }
//                                     return(
//                                             <View 
//                                             style={styles.userContainer}
//                                             key={index}>
//                                                 < Text>{message.content}</Text>
//                                             </View>
//                                         )
//                                     })
//                                 }

//                             </ScrollView>
                        

                    
//                             <View  style={styles.btnGroup} >  

//                                         {
//                                                 recording? (
                                                    
//                                                     <Pressable onPress={stopSpeaking} style={styles.sideBtncontainer}>
//                                                         <Text style={styles.buttonText} >Stop</Text>
//                                                     </Pressable>
//                                                 ): null
//                                             }

//                                         {  
//                                             isLoading? (
                                                
//                                             <Pressable style={styles.btncontainer} >
//                                                         <Image 
//                                                         source={require('../../assets/images/loading.gif')} 
//                                                         style={styles.btnStyle}
//                                                         />
//                                             </Pressable>
                                                
//                                                 ):
//                                                 recording?(
//                                                         <Pressable onPress={stopRecordingVoice} style={styles.btncontainer} >
//                                                             <Image 
//                                                             source={require('../../assets/images/voiceLoading.gif')} 
//                                                             style={styles.btnStyle}
//                                                             />
//                                                         </Pressable>
                                                    
//                                                     ):(
                                                        
//                                                         <Pressable onPress={startRecording} style={styles.btncontainer} >
//                                                             <Image 
//                                                             source={require('../../assets/images/recordingIcon.png')} 
//                                                             style={styles.btnStyle}
//                                                             />
//                                                         </Pressable>
                                                
//                                                 )
//                                         }


//                                         {
//                                             messages? (
                                                
//                                                 <TouchableOpacity onPress={clearMessage} style={styles.sideBtncontainer}>
//                                                     <Text style={styles.buttonText} >Clear</Text>
//                                                 </TouchableOpacity>
//                                             ): null
//                                         }

//                             </View>

                            
//                         </View>
                
//                 ): <Features />
                
//                 }

//             </SafeAreaView>
//         )
        }

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',

       
    
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white',
        // gap: '16px'
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




    // chatDisplay

       chatContainer: {
      
        height: '60%',
        width: '80%',
        
      },

       chatDisplay: {
            height: "80%",
            width: "100%",
            backgroundColor: "#CCCCCC",
            padding: '16px',
            
        
      },


      // chatDisplay_scrollView

      imageChatContainer: {
            height: "200px",
            width: "200px",
            backgroundColor: "#90EE90",
            padding: '8px', 
            marginBottom: "8px",
            borderTopLeftRadius: "0px",
        
      },
      assistantContainer: {
            // height: "70%",
            width: "70%",
            backgroundColor: "#90EE90",
            padding: '8px', 
            marginBottom: "8px",
            borderRadius: "8px",
            borderTopLeftRadius: "0px",
           
        
      },
      userContainer: {
            // height: "70%",
            width: "70%",
            backgroundColor: "white",
            padding: '8px', 
            marginBottom: "8px",
            alignSelf: 'flex-end', 
            borderRadius: "8px",
            borderTopRightRadius: "0px",
        
      },
      


    // Buttons

    btnGroup: {
        flex: 1,
        marginTop: '16px',
        flexDirection: "row", 
        justifyContent: 'space-between', 
      },
      
     sideBtncontainer: {
        //   width: '100%',
        height: '60%',
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: '8px',
       
        borderWidth: 2,
        borderRadius: '8px',
        

      },
      
     
      btnStyle: {
        width: '100px',
        height: '100px',
        resizeMode: 'contain',
      },
      
     
        
  
})