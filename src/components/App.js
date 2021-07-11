import React,{ Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  useColorScheme,
  View,
} from 'react-native';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from '../routs/app';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


 const App = () => {

    return( 
       // <Home />
       <NavigationContainer>
         <AppStack />
       </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  text: {
    fontSize:30, 
    fontWeight:'bold', 
    color:'blue',
    textAlign:'center'
  },
  button: {
    margin: width/20,
    height:width/2.5,
    width:width/2.5,
    borderRadius:15,
    justifyContent:'center',
    backgroundColor:'#fff',
    zIndex:1
  }
})

export default App;