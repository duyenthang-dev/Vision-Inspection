import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Camera } from 'expo-camera'
import { useDispatch } from 'react-redux'
import { takePicture } from './../redux/action/cameraAction'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CameraAccess = ({ navigation }) => {
   const dispatch = useDispatch()
   const [cameraPermissions, setCameraPermissions] = useState(null)
   const [camera, setCamera] = useState(null)
   const [image, setImage] = useState(null)
   const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)

   useEffect(() => {
      ;(async () => {
         const { status } = await Camera.requestCameraPermissionsAsync()
         setCameraPermissions(status === 'granted')
      })()
   }, [])

   const takeAPicture = async () => {
      if (camera) {
         const data = await camera.takePictureAsync(null)
         setImage(data.uri)
         dispatch(takePicture(data.uri))
      }
   }
   if (cameraPermissions === null) {
      return <View />
   }

   if (cameraPermissions === false) {
      return <Text>Bạn chưa cấp quyền truy cập cho camera</Text>
   }
   return (
      <View style={{ flex: 1 }}>
         <View style={styles.cameraContainer}>
            <Camera ref={(ref) => setCamera(ref)} style={styles.fixedRatio} type={cameraType} ratio={'1:5'} />
         </View>
         <View style={styles.actionContainer}>
            <Ionicons
               name='ios-camera-reverse-outline'
               size={36}
               color='white'
               onPress={() => {
                  setCameraType(
                     cameraType === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  )
               
               }}
               style={{marginLeft: 15}}
            />
            <MaterialCommunityIcons  onPress={() => takeAPicture()}
               name='circle-slice-8'
               size={75}
               color='white'
               style={{marginLeft: 15}}
             />
            <View style={styles.prevImg}>
               {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
            </View>
         </View>
      </View>
   )
}

export default CameraAccess

const styles = StyleSheet.create({
   cameraContainer: {
      flex: 1,
      flexDirection: 'row',
   },
   fixedRatio: {
      flex: 1,

   },
   actionContainer: {
      backgroundColor: '#000',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   prevImg: {
      height: 60,
      width: 60,
      borderColor: '#fff',
      borderWidth: 1,
      marginTop: 15,
      marginBottom: 15,
      marginRight: 15,
   }
})
