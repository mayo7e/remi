import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen 
                name="index"
                
                options={{
                    headerShown: false,
                }}
        />
        <Stack.Screen 
                name="home"
                
                options={{
                    // title: "remi-talk"
                   
                    headerShown: false,
                  
                }}
        />
    </Stack>
  )
}