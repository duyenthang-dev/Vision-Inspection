import { View, Text } from 'react-native'
import React from 'react'
import Saved from './../components/'
import InspectDetails from './../components/InspectDetails'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

const SaveScreen = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Saved"
            component={Saved}
            options={{
               title: 'Các bề mặt đã lưu',
               headerTitleAlign: 'center',
            //    headerShadowVisible: false,
            }}
         />
         <Stack.Screen />

         <Stack.Screen
            name="InspectDetails"
            component={InspectDetails}
            options={{
               title: 'Kết quả phân tích',
               headerTitleAlign: 'center',
            //    headerShadowVisible: false,
            }}
         />
         <Stack.Screen />
      </Stack.Navigator>
   )
}

export default SaveScreen
