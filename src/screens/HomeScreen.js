import {SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import Features from '../components/Features';

const PlaceholderImage = require('../../assets/images/bot.png');

const [messages, setMessages] = useState("")

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={PlaceholderImage} />
        </View>
        {messages.length > 0 ? (
            <View>
                <Text>Assistant</Text>
            </View>
        ): <Features />}
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center', 
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
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      }
})