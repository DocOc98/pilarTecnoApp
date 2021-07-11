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
            <PostStack.Screen name="Posts" component={Posts} />
            <PostStack.Screen name="PostDetail" component={PostDetail} />
            <PostStack.Screen name="PostEdit" component={PostEdit} />
            <PostStack.Screen name="PostCreate" component={PostCreate} />
        </PostStack.Navigator>
    )
}