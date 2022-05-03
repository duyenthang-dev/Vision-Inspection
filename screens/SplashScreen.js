import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>BK Inspector</Text>
         <Text style={styles.desc}>Take a picture and vision</Text>
      </View>
   )
}

export default SplashScreen

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2BB459',
   },
   title: {
      color: '#FFFFFF',
      fontSize: 32,
      fontWeight: 'bold',
   },
   desc: {
       color: '#FFFFFF',
       fontSize: 24,
       marginTop: 10,
       fontWeight: '600'
   }
})
