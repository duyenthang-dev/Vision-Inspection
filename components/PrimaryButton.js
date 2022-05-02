import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'

const PrimaryButton = ({ text }) => {
   return (
      <TouchableHighlight style={styles.btnStyle}>
         <Text style={styles.textStyle}>{text}</Text>
      </TouchableHighlight>
   )
}
const styles = StyleSheet.create({
   btnStyle: {
      backgroundColor: '#61AF2B',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 25,
      paddingRight: 25,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      marginLeft: 10,
      marginRight: 10,
   },
   textStyle: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: '600',
   },
})
export default PrimaryButton
