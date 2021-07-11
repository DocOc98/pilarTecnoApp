import React, {Component} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeStackScreen} from './HomeStack';
import {ProfileStackScreen} from './ProfileStack';
import {MapStackScreen} from './MapStack';
import {PostsStackScreen} from './PostsStack';
import {Icon} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
//import { faHome, faUser, faMarker, faMap } from '@fortawesome/fontawesome-svg-icons';
import {
  faHome,
  faUser,
  faMarker,
  faMap,
} from '@fortawesome/free-solid-svg-icons';

const Tab = createMaterialBottomTabNavigator();
export const Tabs = () => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#8E44AD'}}
      tabBarOptions={{
        activeTintColor: '#f5c511', //'rgb(41,34,97)',
        inactiveTintColor: 'red',
        labelStyle: {
          fontSize: 16,
          marginBottom: 3,
          fontWeight: 'bold',
        },
        adaptive: true,
        
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon
              icon={faHome}
              type="font-awesome-5"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon
              icon={faUser}
              type="font-awesome-5"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Posts"
        component={PostsStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon
              icon={faMarker}
              type="font-awesome-5"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faMap} size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
