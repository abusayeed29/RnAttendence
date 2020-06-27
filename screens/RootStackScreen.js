import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import SplashScreen from './SplashScreen';

const RootStack =createStackNavigator();



export default class RootStackScreen extends Component {
    render() {
        return (
            <RootStack.Navigator headerMode="none">
                <RootStack.Screen name="Splash" component ={SplashScreen}/>
                <RootStack.Screen name="Signin" component={SignInScreen}/>
                <RootStack.Screen name="Signup" component={SignUpScreen}/>
            </RootStack.Navigator>
        )
    }
}

