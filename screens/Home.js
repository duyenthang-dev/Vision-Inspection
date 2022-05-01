import {
   SafeAreaView,
   Text,
   StyleSheet,
   Button,
   TextInput,
   View,
} from "react-native";
import React, { useState } from "react";
import HeaderTab from "../components/HeaderTab";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home() {
   const [count, setCount] = useState(0);

   return (
      <SafeAreaView style={styles.container}>
         <HeaderTab />
         <View style={styles.cameraAccess}>
            <MaterialCommunityIcons name="cube-scan" size={24} color="#61AF2B" />
            <Text style={styles.cameraText}>Quét ngay và nhận diện bề mặt</Text>
         </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      marginTop: 50,
      flex: 1,
      backgroundColor: "#FFFFFF",
      paddingLeft: 15,
      paddingRight: 15,
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
     fontSize: 18,
     fontWeight: 'bold',
     marginLeft: 10
  },

   textInput: {
      borderWidth: 1,
      borderColor: "#777",
      padding: 8,
      margin: 10,
      width: 200,
   },
});
