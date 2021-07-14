import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import Login from '../screens/Login';
import { useDispatch, useSelector } from 'react-redux';

const Stack = createStackNavigator();

export default AppStack = (props) => {
    //isLoged = true
    const user = useSelector(state=>state.user.user)
    return(
        <Stack.Navigator headerMode="none">
            {
                /*isLoged? (
                    <Stack.Screen name="AppStack" component={Tabs} />
                ) : (
                    <Stack.Screen name="Login" component={Login} />
                )*/
                user? (
                    <Stack.Screen name="AppStack" component={Tabs} />
                ) : (
                    <Stack.Screen name="Login" component={Login} />
                )
            }
        </Stack.Navigator>
    )
}