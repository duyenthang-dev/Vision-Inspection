import { View, Text, SafeAreaView, StyleSheet, StatusBar, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import ButtonPrimary from './../components/PrimaryButton'
import { globalStyles } from '../styles/global'
import { FontAwesome5 } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {login, signIn} from './../redux/action/authAction'

const Login = ({ navigation }) => {
   const dispatch = useDispatch()
   const navSignup = () => {
      navigation.navigate('Register')
   }
   const [email, setEmail] = useState('')
   const [psw, setPsw] = useState('')

   const handleLogin = () => {
      const data = {
         email: email,
         password: psw,
      }
      // console.log(data)
      dispatch(signIn(data))
   }

   return (
      <SafeAreaView style={styles.container}>
         <TextInput style={styles.textInput} placeholder="Địa chỉ email" onChangeText={setEmail} />
         <View style={{ position: 'relative' }}>
            <TextInput
               style={styles.textInput}
               placeholder="Mậu khẩu"
               secureTextEntry={true}
               onChangeText={setPsw}
            />
            <Ionicons name="eye-off" size={24} color="black" style={styles.eyeIcon} />
         </View>
         <TouchableHighlight style={{ marginBottom: 40 }}>
            <Text style={styles.redText}>Quên mật khẩu</Text>
         </TouchableHighlight>

         <TouchableHighlight underlayColor="#DDDDDD" style={styles.btnStyle} onPress={handleLogin}>
            <Text style={{fontSize: 15, color:'#fff', fontFamily: 'Inter_600SemiBold'}}>Đăng nhập</Text>
         </TouchableHighlight>

         <View style={styles.signUpNav}>
            <Text style={globalStyles.primaryText}>Chưa có tải khoản?</Text>
            <TouchableHighlight onPress={navSignup} underlayColor="#DDDDDD">
               <Text style={styles.redText}> Đăng ký ngay</Text>
            </TouchableHighlight>
         </View>

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
            <Text style={globalStyles.mediumText}>Đăng nhập với Google</Text>
         </View>

         <View style={styles.socialOption}>
            <FontAwesome5
               name="facebook"
               size={24}
               color="#3577E5"
               style={{ marginLeft: 10, marginRight: 10 }}
            />
            <Text style={globalStyles.mediumText}>Đăng nhập với Facebook</Text>
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
      height: 56
   },
   
})

export default Login
