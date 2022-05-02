import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BottomTab = () => {
  return (
    <View style={styles.container}>
      <Text>BottomTab</Text>
      <Text>BottomTab</Text>
      <Text>BottomTab</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    }
})
export default BottomTab