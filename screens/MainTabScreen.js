import React, { Component } from 'react'
import { Text, View, Settings } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeSreen';
import ProfileScreen from './ProfileScreen';
import DetailsScreen from './DetailsScreen';
import SettingsScreen from './SettingsScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default class MainTabScreen extends Component {
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
                        backgroundColor:'#1f65ff'
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
                              backgroundColor="#1f65ff" 
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
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#fff"
                >
                <Tab.Screen
                    name="Home"
                    component={CreateHomeStack}
                    options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={26} />
                    ),
                    }}
                />
                <Tab.Screen
                    name="Notifications"
                    component={CreateDetailStack}
                    options={{
                    tabBarLabel: 'Updates',
                    tabBarColor: '#1f65ff',
                    tabBarIcon: ({ color }) => (
                        <Icon name="bell" color={color} size={26} />
                    ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#694fad',
                    tabBarIcon: ({ color }) => (
                        <Icon name="user" color={color} size={26} />
                    ),
                    }}
                />
                <Tab.Screen
                    name="Explore"
                    component={SettingsScreen}
                    options={{
                    tabBarLabel: 'Explore',
                    tabBarColor: '#d02860',
                    tabBarIcon: ({ color }) => (
                        <Icon name="cog" color={color} size={26} />
                    ),
                    }}
                />
            </Tab.Navigator>
        )
    }
}

