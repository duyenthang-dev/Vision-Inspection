import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'

const PrimaryButton = ({ text, h, w }) => {
   return (
      <TouchableHighlight style={[styles.btnStyle, { height: h, width: w }]}>
         <Text style={styles.textStyle}>{text}</Text>
      </TouchableHighlight>
   )
}
const styles = StyleSheet.create({
   btnStyle: {
      backgroundColor: '#61AF2B',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#61AF2B',
      marginLeft: 10,
      marginRight: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,

      elevation: 16,
   },
   textStyle: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: '600',
   },
})
export default PrimaryButton
