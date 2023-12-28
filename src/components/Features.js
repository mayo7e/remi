import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native'
import React from 'react'

const chatGpt =  require('../../assets/images/chatgptIcon.png') 

export default function Features() {
  return (
 
        <View style={styles.featuresContainer} >
            <Text style={styles.featuresHeader} >Features</Text>

            <View style={[styles.features, { backgroundColor: "pink" }]} >
                <View style={styles.featureHeader} >  
                    <Image  style={styles.image} source={chatGpt} />
                    <Text style={styles.header}  >ChatGpt</Text>
                </View>
                <Text>Explore endless insights with ChatGPT's comprehensive knowledge base.</Text>
            </View>

            <View style={styles.features} >
                <View style={styles.featureHeader} >  
                    <Image  style={styles.image} source={chatGpt} />
                    <Text style={styles.header}  >ChatGpt</Text>
                </View>
                <Text>Explore endless insights with ChatGPT's comprehensive knowledge base.</Text>
            </View>

            <View style={[styles.features, { backgroundColor: "#90EE90" }]} >
                <View style={styles.featureHeader} >  
                    <Image  style={styles.image} source={chatGpt} />
                    <Text style={styles.header}  >ChatGpt</Text>
                </View>
                <Text>Explore endless insights with ChatGPT's comprehensive knowledge base.</Text>
            </View>
        </View>
   
  )
}

const styles = StyleSheet.create({
    featuresContainer: {
      
        gap: "16px",
       

      },
    features: {
        flex: 1,
        width: "280px",
        gap: "8px",
        padding: "16px",
        borderRadius: "16px",
        paddingLeft: "24px",
        paddingRight: "24px",
        backgroundColor: "lightblue"

      },
    image: {
        width: "40px",
        // textAlign: 'center',   
        height: '40px',
      },
    featuresHeader : {
        fontWeight: 700,
        fontSize: 24,
        
      },
    featureHeader : {
        flex: 1,
        gap: "8px",
        flexDirection: "row",
        alignItems: 'center',   
      },
    header : {
        fontWeight: 500,
        fontSize: 20,
        
      },
  
})