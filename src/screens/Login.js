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
import { connect } from 'react-redux';
import { actions } from '../store';
import auth from '@react-native-firebase/auth';
import { AsyncStorage } from 'react-native';
import { Button } from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const mapDispatchToProps = dispatch => ({
  setUser: (data) => 
  dispatch(actions.user.setUser(data)),
})
const mapStateToProps = state => ({
  user: state.user.user
})

export default class Map extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount = () => {
    console.log('init app')
    GoogleSignin.configure({
      webClientid: '358552975672-dsuil1r1insomhqf6bq1l6qn8lrftqvd.apps.googleusercontent.com',
    });
  }

  onGoogleButtonPress = async () => {
    const { idToken } = await GoogleSignIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log('Google credentials: '+JSON.stringify(googleCredential))
    return auth().signInWithCredential(googleCredential);
  }

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
          <StatusBar barStyle='dark-content' style={{backgroundColor:'grey'}} />
          <View style={styles.content}>
            <ImageBackground style={{height}} source={require('../assets/images/fondo6.jpg')}>
              <View>
                <Text style={styles.text}>Ingresa con tus redes sociales</Text>
              </View>
              <View style={styles.buttonsContainer}>
                <Button style={styles.button} tittle='Continuar con Google...' onPress={()=>this.onGoogleButtonPress().then(async(data)=>{
                  console.log('Signed in with Google')
                  if(data){
                    console.log('res login: '+JSON.stringify(data.user))
                    try{
                      await AsyncStorage.setItem('isLoged', JSON.stringify(data.user))
                    }catch(e){
                      console.log('Hubo un error: '+e)
                    }
                    this.props.setUser(data.user)
                  }
                })}
                />
                <Button style={styles.button} title='Continuar con Facebook...'/>
              </View>
            </ImageBackground>
          </View>
            {/* <Text style={styles.text}> Login </Text>
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
            </TouchableOpacity>     */}
        </SafeAreaView>
     
    )}
}

export default connect(mapStateToProps,mapDispatchToProps)((Login))

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