import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableHighlight } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({ navigation }) => {
   // useEffect(() => {
   //    setTimeout(() => {
   //       navigation.navigate('Login')
   //    }, 1500)
   //    return () => window.clearTimeout()
   // }, [])
   const handlePress = (e) => {
      navigation.navigate('Login')
   }
   return (
      <SafeAreaView style={styles.container}>
         <Text style={styles.title}>BK Inspector</Text>
         <Text style={styles.desc}>Take a picture and vision</Text>
         <TouchableHighlight >
            <Text style={styles.textStyle} onPress={handlePress}>Khám phá ngay</Text>
         </TouchableHighlight>
      </SafeAreaView>
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
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 15,
   },
   title: {
      color: '#FFFFFF',
      fontSize: 32,
      fontWeight: 'bold',
   },
   desc: {
      color: '#FFFFFF',
      fontSize: 24,
      // marginTop: 10,
      fontWeight: '600',
   },

   textStyle: {
      color: '#FFFFFF',
      textDecorationLine: 'underline',
      marginTop: 10,
      fontSize: 16,
      fontFamily: 'Inter_600SemiBold'
   }
})
