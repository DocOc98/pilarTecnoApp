import React, { Component } from 'react';
import Posts from '../screens/Posts';
import PostDetail from '../screens/PostDetail';
import PostEdit from '../screens/PostEdit';
import PostCreate from '../screens/PostCreate';
import { createStackNavigator } from '@react-navigation/stack';

const PostStack = createStackNavigator();

export const PostsStackScreen = () => {
    return(
        <PostStack.Navigator>
            <PostStack.Screen
                name="Posts"
                component={Posts}
                options={{
                    title: 'Posts',
                    headerStyle: {
                        backgroundColor: 'rgba(142, 68, 173, 0.3)'
                    },
                    headerTintColor: '#4A235A',
                    headerTitleAlign: 'center',
                }}
            />
            <PostStack.Screen
                name="PostDetail"
                component={PostDetail}
                options={{
                    title: 'Detalle',
                    headerStyle: {
                        backgroundColor: 'rgba(142, 68, 173, 0.3)'
                    },
                    headerTintColor: '#4A235A',
                    headerTitleAlign: 'center',
                }} />
            <PostStack.Screen
                name="PostEdit"
                component={PostEdit}
                options={{
                    title: 'Editar',
                    headerStyle: {
                        backgroundColor: 'rgba(142, 68, 173, 0.3)'
                    },
                    headerTintColor: '#4A235A',
                    headerTitleAlign: 'center',
                }} />
            <PostStack.Screen
                name="PostCreate"
                component={PostCreate}
                options={{
                    title: 'Nuevo Post',
                    headerStyle: {
                        backgroundColor: 'rgba(142, 68, 173, 0.3)'
                    },
                    headerTintColor: '#4A235A',
                    headerTitleAlign: 'center',
                }} />
        </PostStack.Navigator>
    )
}