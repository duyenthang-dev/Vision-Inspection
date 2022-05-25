import { StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import Home from './../screens/Home'
import Saved from '../components/Saved'
import Profile from './../screens/Profile'
import SplashScreen from './../screens/SplashScreen'
import Login from './../screens/Login'
import Register from './../screens/Register'

import React, { useState, useEffect } from 'react'

// import Navigator from './routes/HomeStack'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const homeConfig = {
   headerShown: false,
}

const saveConfig = {
   title: 'Các bề mặt đã lưu',
   tabBarLabel: 'Saved',
   headerTitleAlign: 'center',
}

const HomeScreen = () => {
   const isLogin = useSelector((state) => state.auth.isLogin)

   return isLogin ? (
      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
               let iconName

               if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline'
               } else if (route.name === 'Saved') {
                  iconName = focused ? 'save' : 'save-outline'
               } else if (route.name === 'Profile') {
                  iconName = focused ? 'person' : 'person-outline'
               }
               return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: '#61AF2B',
            tabBarInactiveTintColor: 'gray',
         })}
      >
         <Tab.Screen name="Home" component={Home} options={homeConfig} />
         <Tab.Screen name="Saved" component={Saved} options={saveConfig} />
         <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
   ) : (
      <Stack.Navigator>
         <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
               title: 'Đăng nhập',
               headerTitleAlign: 'center',
               headerStyle: {
                  backgroundColor: '#2BB459',
                  boxShadow: 'none',
               },
               headerShadowVisible: false,
               headerShown: false,
            }}
         />
         <Stack.Screen
            name="Login"
            component={Login}
            options={{
               title: 'Đăng nhập',
               headerTitleAlign: 'center',
               headerShadowVisible: false,
            }}
         />
         <Stack.Screen
            name="Register"
            component={Register}
            options={{
               title: 'Đăng ký',
               headerTitleAlign: 'center',
               headerShadowVisible: false,
            }}
         />
      </Stack.Navigator>
   )
}

export default HomeScreen

const styles = StyleSheet.create({})
