import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View, 
  Alert, 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      photoURL: '',
      name: '',
      password: '',      
    };
  }  

    render() {
        const {email, photoURL, name, password} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.content}>
          <ImageBackground
            style={{width, height}}
            source={require('../assets/images/fondo6.jpg')}>
            <Text style={styles.text}> Crear Usuario </Text>
            <Input
              style={styles.input}
              placeholder="Ingrese email"
              value={email}
              leftIcon={<Icon name="user" size={24} color="#512E5F" />}
              onChangeText={em => this.setState({email: em})}
            />
            <Input
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              leftIcon={<Icon name="lock" size={24} color="#512E5F" />}
              onChangeText={psw => this.setState({password: psw})}
            />
            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: 'rgba(165, 105, 189, 0.5)'},
              ]}
              onPress={() => { 
                auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        console.log('User account created');
                        Alert.alert('Usuario Creado!')
                        this.props.navigation.navigate('Login');
                    })
                    .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                        Alert.alert('Usuario existente!')
                        }

                        if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                        Alert.alert('e-mail invalido!')
                        }

                        console.error(error);
                        Alert.alert('Verifique los datos:',
                        'mail valido y password: minimo 6 caracteres')
                    });
            }}     
                >
              <Text style={styles.text}>Aceptar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: 'rgba(165, 105, 189, 0.5)'},
              ]}
              onPress={() => {this.props.navigation.goBack()}}
                >
              <Text style={styles.text}>Volver</Text>
            </TouchableOpacity>

          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#512E5F',
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#512E5F',
    textAlign: 'center',
    backgroundColor: '#F4ECF7',
    margin: width / 20,
  },

  button: {
    margin: width / 20,
    width: width/2,
    marginLeft: 90,
    borderRadius: 35,
    justifyContent: 'center',
  },
});

export default Create;