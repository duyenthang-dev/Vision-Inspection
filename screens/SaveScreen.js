import { View, Text, ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import Saved from './../components/Saved'
import InspectDetails from './../components/InspectDetails'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const SaveStack = createNativeStackNavigator()

const SaveScreen = () => {
   return (
      <View style={styles.container}>
         <ScrollView>
            <View>
               <Saved />
            </View>

            <View>
               <InspectDetails />
            </View>
         </ScrollView>
      </View>
   )
}

export default SaveScreen

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      position: 'relative'
   },
   saved: {
      zIndex: 1,
   },
   inspectDetails: {
      zIndex: 2,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      borderWidth: 1
   }
})
