import { View, Text, Image } from 'react-native'
import React from 'react'
// import
const img1 = require('./../assets/images/img1.jpg')
const img2 = require('./../assets/images/img2.jpg')

const SavedItem = () => {
   return (
      <View>
         <Image source={img1} />
         <View>
           <Text>heeh</Text>
           <Text></Text>
         </View>
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
