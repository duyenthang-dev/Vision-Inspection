import AppLoading from 'expo-app-loading'
import React from 'react'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducer/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import CameraAccess from './components/CameraAccess'
import HomeScreen from './screens/HomeScreen'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
import { Ionicons } from '@expo/vector-icons'

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

const RootStack = createNativeStackNavigator()
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

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
      <Provider store={store}>
         <NavigationContainer>
            <RootStack.Navigator initialRouteName='HomeScreen'>
               <RootStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
               <RootStack.Screen
                  name="CameraAccess"
                  component={CameraAccess}
                  options={({ navigation }) => ({
                     title: '',
                     headerStyle: {
                        boxShadow: 'none',
                     },
                     headerShadowVisible: false,
                     headerTransparent: true,
                     headerLeft: (props) => (
                        <Ionicons
                           {...props}
                           name="close"
                           size={30}
                           color="white"
                           onPress={() => {
                              navigation.goBack()
                           }}
                        />
                     ),
                  })}
               />
            </RootStack.Navigator>
         </NavigationContainer>
      </Provider>
   )
}
