import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const chatGpt =  require('../../assets/images/welcome.png') 

export default function Features() {
  return (
    <View>
        <View>
            <Image source={chatGpt} />
             <Text>Features</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})