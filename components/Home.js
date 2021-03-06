import {
   SafeAreaView,
   Text,
   StyleSheet,
   TextInput,
   View,
   Platform,
   StatusBar,
   TouchableHighlight,
   Image,
} from 'react-native'
import React from 'react'
import HeaderTab from './HeaderTab'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { globalStyles } from '../styles/global'
import Card from './Card'
import ButtonPrimary from './PrimaryButton'
import { useSelector } from 'react-redux'
export default function Home({ navigation }) {
   const img1 = require('./../assets/images/img1.jpg')
   const img2 = require('./../assets/images/img2.jpg')
   const handleUsingCamera = () => {
      navigation.navigate('CameraAccess')
   }
   const img = useSelector((state) => state.camera.image)

   return (
      <SafeAreaView style={styles.container}>
         <HeaderTab />
         <TouchableHighlight style={styles.cameraAccess} onPress={handleUsingCamera}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
               <MaterialCommunityIcons name="cube-scan" size={24} color="#61AF2B" />
               <Text style={styles.cameraText}>Quét ngay và nhận diện bề mặt</Text>
            </View>
         </TouchableHighlight>

         <View
            style={{
               display: 'flex',
               flexDirection: 'row',
               justifyContent: 'space-between',
               marginTop: 10,
            }}
         >
            <Text style={globalStyles.titleText}>Các bề mặt đã quét</Text>
            <Text style={styles.textLink}> Xem tất cả</Text>
         </View>

         <View style={styles.cardContainer}>
            <Card imgUrl={img1} text={'Bức tường'} desc={'Có lỗ hổng với kích thước ...'} />
            <Card imgUrl={img2} text={'Thanh sắt'} desc={'Bị gỉ sét với mức độ ...'} />
         </View>

         <View style={{ marginTop: 20 }}>
            <Text style={globalStyles.titleText}>Tải ảnh lên để quét</Text>
            <View style={{ display: 'flex', alignItems: 'center', marginTop: 15 }}>
               <View style={styles.imgContainer}>
                  {img && <Image source={{ uri: img }} style={{ flex: 1 }} />}
               </View>
            </View>
            <View style={styles.btnContainer}>
               <ButtonPrimary text="Chọn ảnh" style={{ marginRight: 15 }} h={40} w={120} />
               <ButtonPrimary text="Phân tích" style={{ marginRight: 15 }} h={40} w={120} />
            </View>
         </View>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      // marginTop: 50,
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 15,
   },

   cardContainer: {
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: 20,
      paddingTop: 10,
      borderBottomColor: '#d9d9d9',
      borderBottomWidth: 1,
     
   },

   cameraAccess: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
      backgroundColor: '#EEF7E8',
      borderRadius: 10,
   },

   cameraText: {
      color: '#61AF2B',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 10,
   },

   textInput: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200,
   },

   textLink: {
      color: '#61AF2B',
      textDecorationLine: 'underline',
      fontSize: 15,
      fontWeight: '600',
   },

   imgContainer: {
      width: 150,
      height: 200,
      backgroundColor: '#F1F1F1',
      borderColor: '#BDBDBD',
      borderWidth: 2,
   },

   btnContainer: {
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
   },
})
