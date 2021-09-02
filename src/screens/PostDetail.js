import React, {Component} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  Linking,
  Platform 
} from 'react-native';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {actions} from '../store';
import {connect} from 'react-redux';
import {fetchComments} from '../api';
import { ScrollView } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const MAP_URL = 'https://www.google.com/maps'

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      id: item._id,
      name: item.name,
      address: item.address,
      latitude: item.latitude,
      longitude: item.longitude,
      // comments: [],
    };
    this.linkToMap = this.linkToMap.bind(this)
  }

  keyExtractor = (item, index) => index.toString();
  renderItem = ({item}) => (    
    <View
      style={{
        margin: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 8,
        padding: 5,
      }}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>
          {item.name}
        </Text>
        <Divider />
      </View>      
        <View style={styles.bodycontainer}>
          <Text style={styles.text}>
            {item.address}
          </Text>
          <Divider />
        </View>        
        <View style={styles.bodycontainer}>
          <Text style={styles.text}>
            {item.latitude}
          </Text>
        </View> 
        <View style={styles.bodycontainer}>
          <Text style={styles.text}>
            {item.longitude}
          </Text>
        </View>  
        
    </View>
  );

  _delPost = () => {
    const {item} = this.props.route.params;
    const {_id} = item;
    ///VALIDACIONES
    this.props.delPost({_id}).then(() => {
      this.props.navigation.goBack();
    });
  };

  linkToMap = (latitude, longitude, name) => {
    // console.log(`${MAP_URL}/@${latitude},${longitude}`)
    // Linking.openURL(`${MAP_URL}/@(${latitude},${longitude})`)
    const scheme = Platform.select({
      ios: 'maps:',
      android: 'geo:',
    });
    const position = `${latitude}, ${longitude}`;
    const label = name;
    const urlMap = `${scheme}${position}?q=${label}`;
    Linking.openURL(urlMap);
  }

  render() {
    const {item} = this.props.route.params;
    // const {comments} = this.state;
    
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground
          style={{height, width}}
          source={require('../assets/images/sakurafondo.jpg')}>
          
          <View
            style={{
              margin: 20,
              padding: 5,
              marginTop: 10,
            }}>
              </View>
              {/* <ScrollView > */}
            <View
              style={{
                marginTop: 40,
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: 8,
                padding: 5,
                margin: 20
              }}>
               <Image
                 style={{marginLeft: 50, width: 220, height: 200}}
                 source={{uri: item.url}}
               />
              <View style={styles.titlecontainer}>
                <Text style={styles.title}>{item.name}</Text>
              </View>
              <Divider />
              <View style={styles.bodycontainer}>
                <Text style={styles.text}>Direccion: {item.address}</Text>
              </View>
              <View style={styles.bodycontainer}>
                <Text style={styles.text}>Latitud: {item.latitude}</Text>
              </View>
              <View style={styles.bodycontainer}>
                <Text style={styles.text}>Longitud: {item.longitude}</Text>
              </View>
            </View>
          
            <View style={{flexDirection: 'row', justifyContent: 'center', }}>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('PostEdit', {item})}
              style={[styles.button]}>
              <Text>Editar Lugar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this._delPost()}
              style={[styles.button]}>
              <Text>Borrar Lugar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.linkToMap(item.latitude, item.longitude, item.name)}
              style={[styles.button]}>
              <Text>Ver Mapa</Text>
            </TouchableOpacity>
            </View>
            
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  titlecontainer: {
    padding: 10,
  },
  bodycontainer: {
    padding: 10,
  },
  content: {
    margin: width / 20,
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(165, 105, 189, 0.5)',
    margin: width / 30,        
    borderRadius: 35,    
    alignItems: 'center',
    padding: 7,
    
  },
});
const mapDispatchToProps = dispatch => ({
  delPost: data => dispatch(actions.posts.delPost(data)),
});
const mapStateToProps = state => ({});
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);