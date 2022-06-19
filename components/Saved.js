import { View, Text, Image, Button, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import React, { useState } from 'react'
import ImageView from "react-native-image-viewing";
// import
const img1 = require('./../assets/images/img1.jpg')
const img2 = require('./../assets/images/img2.jpg')

const SavedItem = () => {
   const img = useSelector((state) => state.camera.image)
   const [visible, setVisible] = useState(false);
   return (
      <View>
         <TouchableOpacity
            onPress={() => setVisible(true)}
         >
            <Image 
               source={img1} 
               imageBackgroundColor="#000000"
                
            />
            {/* <Image source={img} /> */}
         </TouchableOpacity>

         <Modal
            visible={visible}
            nRequestClose={() => setVisible(false)}
         >
            <TouchableOpacity
               onPress={() => setVisible(false)}
            >
               <Image 
                  source={img1}
                  style={styles.modal} 
               />
            </TouchableOpacity>
         </Modal>
         
      </View>
   )
}

const Saved = () => {
   return (
      <View>
         <SavedItem />
      </View>
   )
}

export default Saved

const styles = StyleSheet.create({
   modal: {
      alignContent: 'center',
   }
})
