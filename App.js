import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import AppLoading from 'expo-app-loading'
import Home from './screens/Home'
import InspectDetails from './screens/InspectDetails'
import Saved from './screens/Saved'
import Profile from './screens/Profile'

// import Navigator from './routes/HomeStack'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
// import { NavigationContainer } from '@react-navigation/native';

import {
   useFonts,
   Inter_100Thin,
   Inter_200ExtraLight,
   Inter_300Light,
   Inter_400Regular,
   Inter_500Medium,
   Inter_600SemiBold,
   Inter_700Bold,
   Inter_800ExtraBold,
   Inter_900Black,
} from '@expo-google-fonts/inter'

const Tab = createBottomTabNavigator()

const optionConfig = {
   headerShown: false,
}

export default function App() {
   let [fontsLoaded] = useFonts({
      Inter_100Thin,
      Inter_200ExtraLight,
      Inter_300Light,
      Inter_400Regular,
      Inter_500Medium,
      Inter_600SemiBold,
      Inter_700Bold,
      Inter_800ExtraBold,
      Inter_900Black,
   })

   if (!fontsLoaded) {
      return <AppLoading />
   }

   return (
      <NavigationContainer>
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
            <Tab.Screen name="Home" component={Home} options={optionConfig} />
            <Tab.Screen name="Saved" component={InspectDetails} />
            <Tab.Screen name="Profile" component={Profile} />
         </Tab.Navigator>
      </NavigationContainer>
   )
}
