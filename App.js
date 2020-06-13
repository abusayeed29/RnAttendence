import React, { Component } from 'react'
import { Text, StyleSheet, View, navigation} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeSreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailsScreen from './screens/DetailsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default class App extends Component {
    render() {

        CreateHomeStack =({ navigation })=> (
            <HomeStack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor:'#009387'
                    },
                    headerTintColor:'#fff',
                    headerTitleStyle:{
                        fontWeight:'bold'
                    }
                }}>
                <HomeStack.Screen 
                    options={{
                        title:'Overview',
                        headerLeft: () => (
                            <Icon.Button name="navicon" size={25} 
                                backgroundColor="#009387" 
                                onPress={() => navigation.openDrawer()}>
                            </Icon.Button>
                        )
                    }}
                    name="Home" 
                    component={HomeScreen}
                    />

            </HomeStack.Navigator>
        )

        CreateDetailStack =({navigation})=> (
            <HomeStack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor:'#009387'
                    },
                    headerTintColor:'#fff',
                    headerTitleStyle:{
                        fontWeight:'bold'
                    }
                }}>
                <HomeStack.Screen 
                    options={{
                        title:'Details',
                        headerLeft: () => (
                          <Icon.Button name="navicon" size={25} 
                              backgroundColor="#009387" 
                              onPress={() => navigation.openDrawer()}>
                          </Icon.Button>
                        )
                    }}
                    name="Details" 
                    component={DetailsScreen}
                    />

            </HomeStack.Navigator>
        )

        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={CreateHomeStack} />
                    <Drawer.Screen name="Details" component={CreateDetailStack} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({})
