import React,{ Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default class Map extends React.Component {

  _onMapPress = () => {
    Alert.alert(
      "Hola",
      "Ya te encuentras en Map",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }


  render(){
    return( 
        <SafeAreaView style={{flex:1}}>
            <ImageBackground
                style={{height}}
                source={require('../assets/images/fondo6.jpg')}
            >
            <Text style={styles.text}> Login </Text>
            <Input style={styles.input}
            placeholder='Ingrese Usuario'
            leftIcon={<Icon 
                name='user'
                size={24}
                color='#512E5F'/>}
            />

            <Input style={styles.input} 
            placeholder="Password" 
            secureTextEntry={true} 
            leftIcon={<Icon 
                name='lock'
                size={24}
                color='#512E5F'/>}
                />

            <TouchableOpacity style={[styles.button, { backgroundColor:'rgba(165, 105, 189, 0.5)' }]}>
              <Text style={styles.text}>
                Aceptar
              </Text>
            </TouchableOpacity>    
            </ImageBackground>
        </SafeAreaView>
     
    )}
}

const styles = StyleSheet.create({
    text: {
      fontSize:30, 
      fontWeight:'bold', 
      color:'#512E5F',
      textAlign:'center',
      
    },
    input: {
        fontSize:30, 
        fontWeight:'bold', 
        color:'#512E5F',
        textAlign:'center',
        backgroundColor:'#F4ECF7',
      },
      button: {
        margin: width/20,
        borderRadius:15,
        justifyContent:'center',
        
      }
  })