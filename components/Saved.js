import { View, Text, Image, Button } from 'react-native'
import { useSelector } from 'react-redux'
import React from 'react'
import ImageModal from 'react-native-image-modal';
// import
const img1 = require('./../assets/images/img1.jpg')
const img2 = require('./../assets/images/img2.jpg')

const SavedItem = () => {
   const img = useSelector((state) => state.camera.image)
   return (
      <View>
         <Image 
            source={img1} 
            imageBackgroundColor="#000000"  
         />
         {/* <Image source={img} /> */}
         
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
