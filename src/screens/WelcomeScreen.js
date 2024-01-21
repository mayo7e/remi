
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native';
import Button from '../components/Button';
import ImageViewer from '../components/ImageViewer';

import { Stack, useRouter } from 'expo-router'




const PlaceholderImage = require('../../assets/images/bot.png');

export default function Welcome() {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.textContainer} >
            <Text style={styles.welcomeText} >Remi</Text>
            <Text style={styles.subText}  > Your voice-led path to effortles productivity</Text>
        </View>

        <ImageViewer image={PlaceholderImage}/>

       <Button 
            handleClick={() => 
              {router.push(`/home/`)}
            }
       />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    // flexDirection: 'column',
    backgroundColor:'white',
    width:'100%',
    // borderRadius: 10, 
    // borderWidth: 2, 
    // borderColor: 'tomato',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textContainer: {
   maxWidth: "80%",
   
  },
  welcomeText: {
    fontSize: 32,
    display: "flex",
    fontWeight: "500",
    justifyContent: 'center',
    
  },
  subText: {
    fontSize: 16,
    display: "flex",
    justifyContent: 'center',
    textAlign: "center"
  },
 
});
