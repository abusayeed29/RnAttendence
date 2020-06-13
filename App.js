import React, { Component } from 'react'
import { Text, StyleSheet, View, navigation} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';


const Drawer = createDrawerNavigator();

export default class App extends Component {
    render() {
      
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={MainTabScreen} />
                    {/* <Drawer.Screen name="Details" component={CreateDetailStack} /> */}
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({})
