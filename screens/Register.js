import { View, Text, SafeAreaView, StyleSheet, StatusBar, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import ButtonPrimary from './../components/PrimaryButton'
import { globalStyles } from '../styles/global'
import { FontAwesome5 } from '@expo/vector-icons'

const Register = ({ navigation }) => {
   return (
      <SafeAreaView style={styles.container}>
         <TextInput style={styles.textInput} placeholder="Địa chỉ email" />
         <View style={{ position: 'relative' }}>
            <TextInput style={styles.textInput} placeholder="Mậu khẩu" secureTextEntry={true} />
            <Ionicons name="eye-off" size={24} color="black" style={styles.eyeIcon} />
         </View>

         <View style={{ position: 'relative', marginBottom: 30 }}>
            <TextInput style={styles.textInput} placeholder="Xác nhận mật khẩu" secureTextEntry={true} />
         </View>
         
         <ButtonPrimary text={'Đăng ký'} style={styles.btn} h={56} />

         <View style={styles.break}>
            <View style={styles.breakItem}></View>
            <Text style={globalStyles.mediumText}>Hoặc</Text>
            <View style={styles.breakItem}></View>
         </View>

         <View style={styles.socialOption}>
            <FontAwesome5
               name="google"
               size={24}
               color="#EA4335"
               style={{ marginLeft: 10, marginRight: 10 }}
            />
            <Text style={globalStyles.mediumText}>Đăng ký bằng Google</Text>
         </View>

         <View style={styles.socialOption}>
            <FontAwesome5
               name="facebook"
               size={24}
               color="#3577E5"
               style={{ marginLeft: 10, marginRight: 10 }}
            />
            <Text style={globalStyles.mediumText}>Đăng ký bằng Facebook</Text>
         </View>
      </SafeAreaView>
   )
}


const styles = StyleSheet.create({
   container: {
      // marginTop: 50,
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 20,
      fontFamily: 'Inter_400Regular',
      // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 15,
   },
   textInput: {
      paddingTop: 10,
      paddingBottom: 10,
      marginBottom: 15,
      paddingLeft: 15,
      backgroundColor: '#EEF7E8',
      borderRadius: 6,
      borderColor: '#EEF7E8',
      borderWidth: 1,
      height: 56,
      width: '100%',
      fontSize: 15,
      fontFamily: 'Inter_500Medium',
   },
   eyeIcon: {
      position: 'absolute',
      right: 15,
      top: 15,
      color: '#021523',
   },

   redText: {
      color: '#EA4335',
      fontFamily: 'Inter_600SemiBold',
      fontSize: 15,
   },
   btn: {
      fontSize: 15,
      height: 56,
   },
   signUpNav: {
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
   },

   break: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 20,
   },
   breakItem: {
      width: 120,
      height: 1,
      backgroundColor: '#DEDEDE',
      marginRight: 10,
      marginLeft: 10,
      // paddingLeft: 10,
      // paddingRight: 10,
   },
   socialOption: {
      marginTop: 15,
      display: 'flex',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#999999',
      borderRadius: 8,
      height: 56,
      width: 327,
      alignItems: 'center',
      justifyContent: 'center',
   },
})

export default Register
