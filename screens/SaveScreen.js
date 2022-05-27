import { View, Text } from 'react-native'
import React from 'react'
import Saved from './../components/Saved'
import InspectDetails from './../components/InspectDetails'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const SaveStack = createNativeStackNavigator()

const SaveScreen = () => {
   return (
      <SaveStack.Navigator initialRouteName='SavedScreen'>
         <SaveStack.Screen
            name="SavedScreen"
            component={Saved}
            options={{
               title: 'Các bề mặt đã lưu',
               headerTitleAlign: 'center',
               headerShadowVisible: false,
               headerShown: false,
            }}
         />
         
         <SaveStack.Screen
            name="InspectDetails"
            component={InspectDetails}
            options={{
               title: 'Kết quả phân tích',
               headerTitleAlign: 'center',
               headerShadowVisible: false,
               headerShown: false,
            }}
         />
        
      </SaveStack.Navigator>
      
   )
}

export default SaveScreen
