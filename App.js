import React, { Component } from 'react'
import { Text, StyleSheet, View, navigation} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContentScreen from './screens/DrawerContentScreen';

import RootStackScreen from './screens/RootStackScreen';

import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import BookmarkScreen from './screens/BookmarkScreen';


const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export default class App extends Component {
    render() {
      
        return (
            <NavigationContainer>
                {/* <RootStackScreen/> */}
                <Drawer.Navigator 
                    drawerContent={(props) => <DrawerContentScreen {...props}/>}>
                    <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                    <Drawer.Screen name="Support" component={SupportScreen}/>
                    <Drawer.Screen name="Bookmark" component={BookmarkScreen}/>
                </Drawer.Navigator>


            </NavigationContainer>
        )
    }
}



