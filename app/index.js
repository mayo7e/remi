import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Welcome from '../src/screens/WelcomeScreen'
import 'intl-pluralrules'
import i18n from '../src/i18n/i18n'
export default function Index (){
        return(
            <Welcome />
        )
}
